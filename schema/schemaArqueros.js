const mongoose = require('mongoose')

const arqueroSchema = new mongoose.Schema({
    nombre:{
        type: String,
    },
    apellido:{
        type: String,
    },
    imagen:{
        type: String,
    }
})

module.exports = mongoose.model("arqueros",arqueroSchema)