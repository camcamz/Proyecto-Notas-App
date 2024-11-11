const { Router } = require('express');
const { createNotaController, readNotasController, readNotaByIdController } = require("../controller/notas.controller.js");

const router = Router()

router.get('/', readNotasController)
router.post('/',createNotaController)
router.get('/:id',readNotaByIdController)

module.exports = router;


