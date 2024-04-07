const {
   ObtenerMedia,
   crearMedia,
   actulizarMedia,
   borrarMedia
} = require('../controllers/MediaController')

const { Router } = require('express')
const router = Router()

// consultar los generos
router.get('/', ObtenerMedia)
router.post('/', crearMedia)
router.put('/:id',actulizarMedia )
router.delete('/:id',borrarMedia)

module.exports = router