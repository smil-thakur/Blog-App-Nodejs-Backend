import express from "express"
import { addBlog, deleteBlog, getAllBlogs, getAllUserBlogs, getBlogById, updateBlog } from "../controllers/blog-controller.js";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get('/user/:id', getAllUserBlogs);


export default blogRouter;