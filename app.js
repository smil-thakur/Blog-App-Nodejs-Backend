import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/userRoutes.js'
import blogRouter from "./routes/blogRoutes.js";

const app = express();


mongoose.connect("MONGODB CONNECT KEY_HERE")
    .then(() => app.listen(3000))
    .then(() => console.log("Conneted to database"))
    .catch((err) => console.log("err", err));

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
