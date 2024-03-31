const {
   actualizarTipo,
   borrarTipo,
   crearTipo,
   obtenerPorIdTipo,
   obtenerTipo
    
  } = require('../controllers/TipoController')
  
  const { Router } = require('express')
  const router = Router()
  
  router.get('/', obtenerTipo)
  router.post('/', crearTipo)
  router.put('/:id', actualizarTipo)
  router.delete('/:id',borrarTipo)
  router.get('/:id',obtenerPorIdTipo)
  
  
  module.exports = router