const mongoose = require('mongoose')

const delanteroSchema = new mongoose.Schema({
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

module.exports = mongoose.model("delanteros",delanteroSchema)