const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You have to give a name to this pet."],
        minlength: [3, "Pet name must be at least 3 characters in length."]
    },
    type: {
        type: String,
        required: [true, "Pet type is required." ],
        minlength: [3, "Pet type must be at least 3 characters long."]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [3, "Pet description must be at least 3 characters long."]
    },
    skill_1: {
        type: String,
    },
    skill_2: {
        type: String,
    },
    skill_3: {
        type: String,
    },

}, { timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = { Pet }
