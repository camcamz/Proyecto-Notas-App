const { Router } = require('express');
const { createNotaController, readNotasController, readNotaByIdController, deleteNotaController } = require("../controller/notas.controller.js");

const router = Router()

router.get('/', readNotasController)
router.post('/',createNotaController)
router.get('/:id',readNotaByIdController)
router.delete('/:id', deleteNotaController);
module.exports = router;


