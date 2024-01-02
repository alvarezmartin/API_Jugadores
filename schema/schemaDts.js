const mongoose = require('mongoose')

const DtSchema = new mongoose.Schema({
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

module.exports = mongoose.model("cuerpotecnico",DtSchema)