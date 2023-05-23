const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const JobRouter = require("./routers/jobs");

const app = express();

//
app.use(cors());

app.get("/", (req, res) => {
  res.send("Carrer query for jobs");
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("got it");
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.use("/jobs", JobRouter);
