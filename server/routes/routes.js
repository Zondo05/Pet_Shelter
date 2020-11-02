const controller = require('../controllers/controller');

module.exports = app => {
    // C
    app.post('/api/pets/new', controller.createPet);
    // R
    app.get('/api/pets', controller.allPets);
    app.get('/api/pets/:id', controller.onePet);
    // U
    app.patch('/api/pets/:id', controller.updatePet);
    // D
    app.delete('/api/pets/:id', controller.deletePet);
}