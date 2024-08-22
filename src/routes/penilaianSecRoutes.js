const express = require("express");
const app = express();

app.use(express.json());

const penilaianSecControllers = require("../controllers/penilaianSecController");

// ENDPOINT CELCIUS
app.get("/celcius/:celcius", penilaianSecControllers.celcius);
// ENDPOINT REAMUR
app.get("/reamur/:reamur", penilaianSecControllers.reamur);
// ENDPOINT FAHRENHEIT
app.get("/fahrenheit/:fahrenheit", penilaianSecControllers.fahrenheit);
// ENDPOINT KELVIN
app.get("/kelvin/:kelvin", penilaianSecControllers.kelvin);

module.exports = app;