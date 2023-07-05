// Imports
const cors = require('cors');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const {sequelize}= require('./database');
const app = express();

const port = process.env.PORT;
// Middlewares
// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, 'public')));

sequelize.authenticate() 
    .then(()=>{
        console.log('Se ha conectado la base de datos!')
    })
    .catch((error) => console.log('Error al conectar a base de datos', error));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));