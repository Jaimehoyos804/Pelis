const {
  crearDirector,
  obtenerDirectores,
  actualizarDirector,
  borrarDirector,
  obtenerPorIdDirector
  
} = require('../controllers/DirectorController')

const { Router } = require('express')
const router = Router()

router.get('/', obtenerDirectores)
router.post('/', crearDirector)
router.put('/:id', actualizarDirector)
router.delete('/:id',borrarDirector)
router.get('/:id',obtenerPorIdDirector)


module.exports = router