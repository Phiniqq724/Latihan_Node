exports.bmi = (req, res) => {
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)

    let bmi = weight / (height * height)
    let status = ''
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)'
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = 'Kelebihan berat badan'
    } else {
        status = 'Kegemukan (obesitas)'
    }
    let response = {
        weight: weight,
        height: height,
        bmi: bmi,
        status: status
    }
    return res.json(response)
}