const express = require("express");
const app = express();

app.use(express.json());

const penilaianThirdControllers = require("../controllers/penilaianThirdController");

// ENDPOINT DECIMAL
app.get("/decimal", penilaianThirdControllers.decimal);
// ENDPOINT OCTAL
app.get("/octal", penilaianThirdControllers.octal);
// ENDPOINT HEXA
app.get("/hexa", penilaianThirdControllers.hexa);
// ENDPOINT BINARY
app.get("/binary", penilaianThirdControllers.binary);

module.exports = app;