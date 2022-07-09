const express = require("express");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const app = express();

const apicache = require("apicache");

const cache = apicache.middleware;
app.use(cache("2 minutes"));
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port : ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
