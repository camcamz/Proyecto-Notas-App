const express = require('express');
const cors = require('cors');
const notasRoutes = require('./backend/routes/notas.routes.js');

const app = express();
const port = 3000;


app.use(express.json()); // Esto habilita el manejo de JSON

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Rutas
app.use('/api/notas', notasRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
