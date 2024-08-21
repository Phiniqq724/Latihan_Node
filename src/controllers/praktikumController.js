exports.profile = (req, res) => {
    let name = req.params.name
    let age = req.params.age

    let response = {
        nama: name,
        umur: age
    }

    return res.json(response)
}