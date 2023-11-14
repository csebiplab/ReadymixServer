const express = require("express");
const app = express();
const createError = require("http-errors");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

require("dotenv").config();
const dbConnect = require("./db/dbConnect");
dbConnect();

app.use(express.json());
const permittedOrigins = ["http://localhost:3000"];

// Configure CORS middleware
const corsOptions = {
    origin: (origin, callback) => {
        if (permittedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
app.use(cors());
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "Too many request from this api. try again later",
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// import routes----------->
const metadataRoute = require("./api/v1/routes/seo-credentials/metadata.routes");
const robotTxtRoute = require("./api/v1/routes/seo-credentials/robot-txt.routes");
const searchConsoleRoute = require("./api/v1/routes/seo-credentials/search-console.routes");
const sitemapRoute = require("./api/v1/routes/seo-credentials/sitemap.routes");
const User = require("./allDataDb/userCollection/User");
const PostCollect = require("./allDataDb/PostCollection/postCollection");
// routes------------>
app.use("/api/v1/metadata", metadataRoute);
app.use("/api/v1/robot-txt", robotTxtRoute);
app.use("/api/v1/search-console", searchConsoleRoute);
app.use("/api/v1/sitemap", sitemapRoute);

app.get("/", (req, res) => {
    res.send("this is server");
});
app.post('/users', async (req, res) => {
    const user = req.body;
    const query = { email: user.email };
    const existingUser = await User.findOne(query);

    if (existingUser) {
        return res.json({ message: 'User already exists' });
    }

    try {
        const newUser = new User(user);
        await newUser.save();

        res.json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Error adding user' });
    }
});
app.post('/api/post', async (req, res) => {
    try {
        const { name, description, image, quillValue } = req.body;
        const newPost = new PostCollect({
            name,
            description,
            image,
            quillValue,
        });
        const savedPost = await newPost.save();

        res.status(201).json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await PostCollect.find();

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const post = await PostCollect.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.delete('/api/blog/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedPost = await PostCollect.findByIdAndDelete(postId)
        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json({ message: 'Post deleted successfully', deletedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.put('/blog-post-update/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const updateInfo = req.body;
        const existingPost = await PostCollect.findById(postId);
        if (!existingPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        const updatedPost = await PostCollect.findByIdAndUpdate(postId, updateInfo, { new: true });
        res.json({ message: 'Post updated successfully', updatedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// here i make search text from the admin dashboard 
app.get('/search-blog', async (req, res) => {
    try {
        const searchText = req.query.search;
        const filter = {
            $or: [
                { name: { $regex: searchText, $options: 'i' } },
                { description: { $regex: searchText, $options: 'i' } },
            ],
        };
        const posts = await PostCollect.find(filter);
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.use((req, res, next) => {
    createError(404, "Route not found");
    next();
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message,
    });
});

module.exports = app;
