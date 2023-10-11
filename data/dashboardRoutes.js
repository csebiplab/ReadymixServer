const { MonitorUp, FileText, Star, Users } = require("lucide-react");

export const dashboardRoutes = [
    {
        label: "Seo Credentials",
        icon: MonitorUp,
        href: "/seo-credentials",
        color: "text-blue-500",
    },
    {
        label: "Blogs",
        icon: FileText,
        href: "/blogs",
        color: "text-purple-500",
    },
    {
        label: "Testimonials",
        icon: Star,
        href: "/testimonials",
        color: "text-deep-purple-500",
    },
    {
        label: "Users",
        icon: Users,
        href: "/users",
        color: "text-teal-500",
    },
];
