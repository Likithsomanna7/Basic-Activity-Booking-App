const express = require("express");
const { listActivities } = require("../controllers/activityController");
const { addActivity } = require("../controllers/activityController");

const router = express.Router();

router.get("/", listActivities);
router.post("/", addActivity);
module.exports = router;
