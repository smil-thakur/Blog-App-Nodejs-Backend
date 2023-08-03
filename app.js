import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/userRoutes.js'
import blogRouter from "./routes/blogRoutes.js";

const app = express();


mongoose.connect("mongodb+srv://admin:QAZ123%4011sept@cluster0.rmy7tsq.mongodb.net/Blog?retryWrites=true&w=majority")
    .then(() => app.listen(3000))
    .then(() => console.log("Conneted to database"))
    .catch((err) => console.log("err", err));

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
