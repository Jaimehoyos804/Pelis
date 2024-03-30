const Director = require('../models/director');
const { request, response } = require('express')

const obtenerDirectores = async (
    req = request, res = response
) => {
    try {
        const { estado } = req.query

        const director = await Director.find({ estado })

        return res.json(director)

    } catch (e) {
        return res.status(500).json({
            message: e
        })
    }
}
const crearDirector = async (
    req = request, res = response
    
) => {
    try{
        const body = req.body
        console.log(body)
        const director = new Director(body)

        await director.save()

        return res.status(201).json(director)

    } catch(e){
        return res.status(500).json({
            message: e
        })
    }
}


const actualizarDirector = async (
    req = request, res = response
    ) => {
        try{
            const id = req.params.id
            const body = req.body
            
            body.fechaActualizacion = new Date()
            const director = 
                await Director.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(director)
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}
//const obtenerPorId
const obtenerPorIdDirector= async (
    req = request, res = response
    ) => {
        try{
            const director = await Director.findById(req.params.id);
            if(!director){
                return res.status(404).json({
                    message:"ERROR Genero no encontrado!!"
                })
         
            }
            res.json(director)
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

const borrarDirector= async (
    req = request, res = response
    ) => {
        try{
            const id = req.params.id

            await Director.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Borrado"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerDirectores,
    actualizarDirector,
    obtenerPorIdDirector,
    borrarDirector,
    crearDirector
}
