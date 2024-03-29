const { Schema, model } = require('mongoose')

const TipoSchema = Schema({
    nombre: {
        type: String,
        unique: [true, 'Nombre es único'],
        required: [true, 'Nombre es requerido'],
        minLength: 1
    },
    
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Tipo', TipoSchema)