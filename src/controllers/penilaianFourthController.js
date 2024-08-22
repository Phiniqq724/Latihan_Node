exports.bmi = (req, res) => {
    let weight = Number(req.body.berat)
    let height = Number(req.body.tinggi)

    let bmi = weight / (height * height)
    let status = ''
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)'
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = 'Kelebihan berat badan'
    }
    let response = {
        weight: weight,
        height: height,
        bmi: bmi,
        status: status
    }
    return res.json(response)
}

exports.bujurSangkar = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    return res.json(response)
}