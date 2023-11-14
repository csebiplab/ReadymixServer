const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    quillValue: String
})
const PostCollect = mongoose.model('postCollection', postSchema);
module.exports = PostCollect;
