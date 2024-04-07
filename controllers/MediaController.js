const Media = require('../models/media')
const { request, response } = require('express')

const ObtenerMedia = async (
  req = request, res = response
) => {
  try {
    //const { titulo } = req.query

    const media = await Media.find()

    return res.json(media)

  } catch (e) {
    return res.status(500).json({
      message: e
    })
  }
}

const crearMedia = async (
  req = request, res = response
) => {
  try {
    const body = req.body
    //console.log(body)
    //const { nombre, descripcion } = body

    const media = new Media(body)

    await media.save()

    return res.status(201).json(media)

  } catch (e) {
    return res.status(500).json({
      message: e
    })
  }
}

const actulizarMedia = async (
  req = request, res = response
) => {
  try {
    const id = req.params.id
    const body = req.body
    //console.log(body)
    //const { nombre, descripcion } = body
    body.fechaActualizacion = new Date()
    const media =
      await Media.findByIdAndUpdate(id, body, { new: true })
    return res.status(201).json(media)

  } catch (e) {
    return res.status(500).json({
      message: e
    })
  }
}
const borrarMedia = async (
  req = request, res = response
) => {
  try {
    const id = req.params.id

    await Media.findByIdAndDelete(id)

    return res.status(204).json({
      message: "Borrado"
    })

  } catch (e) {
    return res.status(500).json({
      message: e
    })
  }
}


module.exports = {
  ObtenerMedia,
  crearMedia,
  actulizarMedia,
  borrarMedia
}