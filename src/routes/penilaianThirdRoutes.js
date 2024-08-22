const express = require("express");
const app = express();

app.use(express.json());

const penilaianThirdControllers = require("../controllers/penilaianThirdController");

// ENDPOINT DECIMAL
app.get("/decimal/:number", penilaianThirdControllers.decimal);
// ENDPOINT OCTAL
app.get("/octal/:number", penilaianThirdControllers.octal);
// ENDPOINT HEXA
app.get("/hexa/:number", penilaianThirdControllers.hexa);
// ENDPOINT BINARY
app.get("/binary/:number", penilaianThirdControllers.binary);

module.exports = app;