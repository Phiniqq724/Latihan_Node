exports.profile = (req, res) => {
    let name = req.params.name
    let age = req.params.age

    let response = {
        nama: name,
        umur: age
    }

    return res.json(response)
}
exports.identitas = (req, res) => {
    let nama = req.query.nama
    let kelas = req.query.kelas

    let response = {
        nama: nama,
        kelas: kelas
    }

    return res.json(response)
}