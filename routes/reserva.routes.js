// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", (_req, res) => {
    res.render("index");
  })
// Formulario para crear una reserva
router.get("/reservas/create", (req, res) => {
    const reservaId = req.params.id;
    res.render("reservas/show", { id: reservaId });
  })
// Formulario para actualizar una reserva
router.get("/reservas/edit",(_req, res) => {
    res.render("reservas/create");
  })
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/',);
 
// Crear una reserva
router.post('/api/',);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);

 
 module.exports = router;