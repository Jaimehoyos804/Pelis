const Productora = require('../models/productora')
const { request, response } = require('express')

const obtenerProductora = async (
    req = request, res = response
) => {
    try {
        const { estado } = req.query

        const productora = await Productora.find({ estado })

        return res.json(productora)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}


const crearProductora = async (
    req = request, res = response
) => {
    try {
        const body = req.body
        //console.log(body)
        //const { nombre, descripcion } = body

        const productora = new Productora(body)

        await productora.save()

        return res.status(201).json(productora)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}
const actualizarProductora = async (
    req = request, res = response
) => {
    try {
        const id = req.params.id
        const body = req.body
        //console.log(body)
        //const { nombre, descripcion } = body
        body.fechaActualizacion = new Date()
        const productora =
            await Productora.findByIdAndUpdate(id, body, { new: true })
        return res.status(201).json(productora)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}

const borrarProductora= async (
    req = request, res = response
    ) => {
        try{
            const id = req.params.id

            await Productora.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Borrado"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}
const obtenerPorIdProductora= async (
    req = request, res = response
    ) => {
        try{
            const productora = await Productora.findById(req.params.id);
            if(!productora){
                return res.status(404).json({
                    message:"ERROR Productora no encontrada!!"
                })
         
            }
            res.json(productora)
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}
module.exports = {
   actualizarProductora,
   borrarProductora,
   crearProductora,
   obtenerProductora,
   obtenerPorIdProductora
}