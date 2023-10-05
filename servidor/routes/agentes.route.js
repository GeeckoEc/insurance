const ControladorAgentes = require('../controllers/agentes.controller');
module.exports = (app) => {
    app.post('/api/agentes/insertar', ControladorAgentes.insertar);
    app.post('/api/agentes/editar', ControladorAgentes.editar);
    app.post('/api/agentes/eliminar', ControladorAgentes.eliminar);
    app.post('/api/agentes/listar', ControladorAgentes.listar);
}