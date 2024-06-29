import express from "express";
import mongoose from "mongoose";
import morgran from "morgan";

const app = express();

// middlewares
app.use(morgran("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => {
  console.log("server is running");
});
