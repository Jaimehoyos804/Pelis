const {
    actualizarProductora,
    borrarProductora,
    crearProductora,
    obtenerPorIdProductora,
    obtenerProductora
    
  } = require('../controllers/ProductoraController')
  
  const { Router } = require('express')
  const router = Router()
  
  router.get('/', obtenerProductora)
  router.post('/', crearProductora)
  router.put('/:id', actualizarProductora)
  router.delete('/:id',borrarProductora)
  router.get('/:id',obtenerPorIdProductora)
  
  
  module.exports = router