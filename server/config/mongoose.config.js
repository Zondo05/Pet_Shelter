const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pet_shelter_db', { useNewUrlParser: true, useUnifiedTopology: true })
.   then(() => console.log("Connection to the database established"))
.catch(err => console.log("An error occurred when connecting to the database"))