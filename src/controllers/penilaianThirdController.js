exports.decimal = (req, res) => {
    let number = Number(req.params.number)
    let octal = number.toString(8)
    let hexa = number.toString(16)
    let binary = number.toString(2)
    let response = {
        number: number,
        convert: {
            octal: octal,
            hexa: hexa,
            binary: binary
        }
    }

    return res.json(response)
}
exports.octal = (req, res) => {
    let number = Number(req.params.number)
    let decimal = parseInt(number, 8)
    let hexa = decimal.toString(16)
    let binary = decimal.toString(2)
    let response = {
        number: number,
        convert: {
            decimal: decimal,
            hexa: hexa,
            binary: binary
        }
    }

    return res.json(response)
}
exports.hexa = (req, res) => {
    let number = req.params.number
    let decimal = parseInt(number, 16)
    let octal = decimal.toString(8)
    let binary = decimal.toString(2)
    let response = {
        number: number,
        convert: {
            decimal: decimal,
            octal: octal,
            binary: binary
        }
    }

    return res.json(response)
}
exports.binary = (req, res) => {
    let number = req.params.number
    let decimal = parseInt(number, 2)
    let octal = decimal.toString(8)
    let hexa = decimal.toString(16)
    let response = {
        number: number,
        convert: {
            decimal: decimal,
            octal: octal,
            hexa: hexa
        }
    }

    return res.json(response)
}