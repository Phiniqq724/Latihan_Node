const express = require("express");
const app = express();

app.use(express.json());

const penilaianFirstControllers = require("../controllers/penilaianFirstController");

// ENDPOINT KERUCUT
app.get("/kerucut/:jari/:tinggi", penilaianFirstControllers.kerucut);
// ENDPOINT TABUNG
app.get("/tabung/:jari/:tinggi", penilaianFirstControllers.tabung);
// ENDPOINT BOLA
app.get("/bola/:jari", penilaianFirstControllers.bola);
// ENDPOINT KUBUS
app.get("/kubus/:sisi", penilaianFirstControllers.kubus);

module.exports = app;