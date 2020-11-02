const { Pet } = require('../models/pet.models');

module.exports = {
    // C
    createPet: (req, res) => {
        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // R
    allPets: (req, res) =>{
        Pet.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    onePet: (req, res) =>{
        Pet.findOne({ _id: req.params.id })
            .then(data => {
                if(data == null) {
                    res.status(500).json({ error: "Pet does not exist." })
                } else {
                res.json(data)
                }
            })
            .catch(err => res.json(err));
    },
    // U
    updatePet: (req, res) => {
        Pet.findOneAndUpdate({  _id: req.params.id }, req.body, {new: true, runValidators: true, userFindAndModify: true })
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    },
    // D
    deletePet: (req, res) => {
        Pet.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err =>res.json(err));
    }
}