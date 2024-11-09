const { Router } = require('express');
const { createNotaController, readNotasController } = require("../controller/notas.controller.js");

const router = Router()

router.get('/', readNotasController)
router.post('/',createNotaController)

module.exports = router;


