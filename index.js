// import dependecies yang dibutuhkan

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req, res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-poin
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(4000, () => {
    console.log("Server run on port 4000");
})