exports.celcius = (req, res) => {
    let celcius = Number(req.params.celcius)
    let reamur = 4 / 5 * celcius
    let fahrenheit = 9 / 5 * celcius + 32
    let kelvin = celcius + 273
    let response = {
        celcius: celcius,
        result: {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    return res.json(response)
}
exports.reamur = (req, res) => {
    let reamur = Number(req.params.reamur)
    let celcius = 5 / 4 * reamur
    let fahrenheit = 9 / 4 * reamur + 32
    let kelvin = 5 / 4 * reamur + 273
    let response = {
        reamur: reamur,
        result: {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    return res.json(response)
}
exports.fahrenheit = (req, res) => {
    let fahrenheit = Number(req.params.fahrenheit)
    let celcius = 5 / 9 * (fahrenheit - 32)
    let reamur = 4 / 9 * (fahrenheit - 32)
    let kelvin = 5 / 9 * (fahrenheit - 32) + 273
    let response = {
        fahrenheit: fahrenheit,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    return res.json(response)
}
exports.kelvin = (req, res) => {
    let kelvin = Number(req.params.kelvin)
    let celcius = kelvin - 273
    let reamur = 4 / 5 * (kelvin - 273)
    let fahrenheit = 9 / 5 * (kelvin - 273) + 32
    let response = {
        kelvin: kelvin,
        result: {
            celcius: celcius,
            reamur: reamur,
            fahrenheit: fahrenheit
        }
    }
    return res.json(response)
}
