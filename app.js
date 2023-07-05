// Imports
const cors = require('cors');
const helmet = require('helmet');
const morgan = require("morgan");
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const {sequelize}= require('./database');
const app = express();

const port = process.env.PORT;
// Middlewares
// TODO: Implementar middlewares

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



sequelize.authenticate() 
    .then(()=>{
        console.log('Se ha conectado la base de datos!')
    })
    .catch((error) => console.log('Error al conectar a base de datos', error));

// Routes
app.use('/', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log(`Servidor en http://localhost:${process.env.PORT}`));