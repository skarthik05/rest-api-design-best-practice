const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  console.log({ workoutId }, "rec");
  try {
    const record = recordService.getRecordForWorkout(workoutId);

    res.status(201).send({ status: "OK", data: record });
  } catch (error) {
    res.status(error?.status || 500);
    send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
module.exports = { getRecordForWorkout };
