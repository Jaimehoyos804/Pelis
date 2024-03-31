const Tipo = require('../models/tipo')
const { request, response } = require('express')

const obtenerTipo = async (
    req = request, res = response
) => {
    try {
        const { estado } = req.query

        const tipo = await Tipo.find({estado})

        return res.json(tipo)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}


const crearTipo = async (
    req = request, res = response
) => {
    try {
        const body = req.body
        //console.log(body)
        //const { nombre, descripcion } = body

        const tipo = new Tipo(body)

        await tipo.save()

        return res.status(201).json(tipo)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}
const actualizarTipo = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        //console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const tipo =
            await Tipo.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(tipo)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}

const borrarTipo = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id

        await Tipo.findByIdAndDelete(id)

        return res.status(204).json({
            message: "Borrado"
        })

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}
const obtenerPorIdTipo = async (
    req = request, res = response
) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            return res.status(404).json({
                message: "ERROR Tipo no encontrada!!"
            })

        }
        res.json(tipo)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}
module.exports = {
    actualizarTipo,
    borrarTipo,
    crearTipo,
    obtenerPorIdTipo,
    obtenerTipo
}