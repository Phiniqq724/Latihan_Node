exports.kerucut = (req, res) => {
    let jari = Number(req.params.jari)
    let tinggi = Number(req.params.tinggi)
    let volume = 1 / 3 * Math.PI * jari * jari * tinggi
    let luas = Math.PI * jari * (jari + Math.sqrt(tinggi * tinggi + jari * jari))
    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume,
        luas: luas
    }
    return res.json(response)
}

exports.tabung = (req, res) => {
    let jari = Number(req.params.jari)
    let tinggi = Number(req.params.tinggi)
    let volume = Math.PI * jari * jari * tinggi
    let luas = 2 * Math.PI * jari * (jari + tinggi)
    let response = {
        jari: jari,
        tinggi: tinggi,
        volume: volume,
        luas: luas
    }
    return res.json(response)
}

exports.bola = (req, res) => {
    let jari = Number(req.params.jari)
    let volume = 4 / 3 * Math.PI * jari * jari * jari
    let luas = 4 * Math.PI * jari * jari
    let response = {
        jari: jari,
        volume: volume,
        luas: luas
    }
    return res.json(response)
}

exports.kubus = (req, res) => {
    let sisi = Number(req.params.sisi)
    let volume = sisi * sisi * sisi
    let luas = 6 * sisi * sisi
    let response = {
        sisi: sisi,
        volume: volume,
        luas: luas
    }
    return res.json(response)
}