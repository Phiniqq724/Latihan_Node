const express = require("express");
const app = express();

app.use(express.json());

const penilaianFourthControllers = require("../controllers/penilaianFourthController");

// ENDPOINT BMI
app.get("/bmi", penilaianFourthControllers.bujurSangkar);

module.exports = app;