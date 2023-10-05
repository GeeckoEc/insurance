const ControladorClientes = require('../controllers/clientes.controller');
const ControladorAgentes = require('../controllers/agentes.controller');
module.exports = (app) => {
    app.post('/api/clientes/insertar', ControladorClientes.insertar);
    app.post('/api/clientes/editar', ControladorClientes.editar);
    app.post('/api/clientes/eliminar', ControladorClientes.eliminar);
    app.post('/api/clientes/listar', ControladorClientes.listar);
    app.post('/api/agentes/insertar', ControladorAgentes.insertar);
    app.post('/api/agentes/editar', ControladorAgentes.editar);
    app.post('/api/agentes/eliminar', ControladorAgentes.eliminar);
    app.post('/api/agentes/listar', ControladorAgentes.listar);
}