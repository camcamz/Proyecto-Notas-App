const { Router } = require('express');
const { createNotaController, readNotasController } = require("../controller/notas.controller.js");

const router = Router()

router.get('/notas', readNotasController)
router.post('/notas',createNotaController)

module.exports = router;


