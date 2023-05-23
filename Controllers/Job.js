const { request } = require("express");
const Jobs = require("../models/Jobs");

exports.getSpecificJobs = async (req, res) => {
  const { jobTitle, department, location } = req.body;
  console.log(req.body);
  let results = {};
  try {
    const job = await Jobs.find({ title: jobTitle });
    job.map((item) => {
      if (item?.department === department && item?.location === location) {
        results = job;
        res.status(200).json(results);
      } else {
        res.status(404).json({ message: "Job not found" });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const data = await Jobs.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
