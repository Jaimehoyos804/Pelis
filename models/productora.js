const { Schema, model } = require('mongoose')

const ProductoraSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
        minLength: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    },
    sloglan:{
        type: String,
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Productora', ProductoraSchema)