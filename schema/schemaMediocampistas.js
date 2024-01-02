const mongoose = require('mongoose')

const mediocampistaSchema = new mongoose.Schema({
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

module.exports = mongoose.model("mediocampistas",mediocampistaSchema)