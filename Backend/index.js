import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL;

// Connection to MongoDB
mongoose
  .connect(URL)
  .then(() => console.log("connected Succefully.."))
  .catch((err) => console.log("error", err));

// Defines Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
