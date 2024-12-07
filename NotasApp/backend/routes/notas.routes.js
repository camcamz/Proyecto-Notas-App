const { Router } = require('express');
const { createNotaController, readNotasController, readNotaByIdController, deleteNotaController, updateNotaController } = require("../controller/notas.controller.js");

const router = Router()

router.get('/', readNotasController)
router.post('/',createNotaController)
router.get('/:id',readNotaByIdController)
router.delete('/:id', deleteNotaController);
router.put('/:id', updateNotaController)

module.exports = router;


