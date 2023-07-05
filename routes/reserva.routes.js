// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const ctrlReservas = require('../controllers/reserva.controllers');

const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", (req, res) => {
    res.render("index");
  })
// Formulario para crear una reserva
router.get("/reserva/create", (req, res) => {
    const reservaId = req.params.id;
    res.render("reservas/create", { id: reservaId });
  })
// Formulario para actualizar una reserva
router.get("/reserva/edit",(_req, res) => {
    res.render("reservas/create");
  })
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', ctrlReservas.index);
 
// Crear una reserva
router.post('/api/', ctrlReservas.store);
 
// Actualizar una reserva
router.put('/api/:id', ctrlReservas.update);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', ctrlReservas.destroy);

 
 module.exports = router;