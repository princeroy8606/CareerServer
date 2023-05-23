const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { required: true, type: String },
  department: { required: true, type: String },
  location: { required: true, type: String },
  experience: { required: true, type: String },
});

const Jobs = mongoose.model("Jobs", jobSchema);
module.exports = Jobs;
