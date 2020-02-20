const petModel =  require('../models/petSchema')
const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets())
    },
    add: (req, res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet)
        res.send(`ola, ${novoPet.nome}`)
    },
    search: (req, res) => {
        let novoPet = req.params;
        let petEncontrado = petModel.buscarPet(novoPet.nome)
       // console.log(petEncontrado)
        res.send(`Existem ${petEncontrado.length} pets com esse nome.`)
    }
}


module.exports = petController;