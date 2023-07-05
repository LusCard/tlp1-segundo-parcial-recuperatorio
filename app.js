// Imports
const cors = require('cors');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:'.env'});

const app = express();

const port = process.env.PORT;
// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log(`Server on port ${port}`));