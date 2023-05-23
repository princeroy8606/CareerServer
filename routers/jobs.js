const express = require("express");
const router = express.Router();

const Jobs = require('../Controllers/Job')

router.post('/',Jobs.getSpecificJobs)
router.get('/',Jobs.getAllJobs)

module.exports = router