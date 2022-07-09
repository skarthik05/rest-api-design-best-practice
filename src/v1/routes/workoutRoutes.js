const express = require("express");
const workoutController = require("../../controllers/workoutController");

const recordController = require("../../controllers/recordController");

const memberController = require("../../controllers/memberController");

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);
router.get("/members/:memberId", memberController.getMemberMetaDetails);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
