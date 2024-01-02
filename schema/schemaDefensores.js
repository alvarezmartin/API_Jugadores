const mongoose = require('mongoose')

const defensorSchema = new mongoose.Schema({
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

module.exports = mongoose.model("defensores",defensorSchema)