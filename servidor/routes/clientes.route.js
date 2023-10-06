const ControladorClientes = require('../controllers/clientes.controller');
const ControladorAgentes = require('../controllers/agentes.controller');
const ControladorPolizas = require('../controllers/polizas.controller');

module.exports = (app) => {
    app.post('/api/clientes/insertar', ControladorClientes.insertar);
    app.post('/api/clientes/editar', ControladorClientes.editar);
    app.post('/api/clientes/eliminar', ControladorClientes.eliminar);
    app.post('/api/clientes/listar', ControladorClientes.listar);

    app.post('/api/agentes/insertar', ControladorAgentes.insertar);
    app.post('/api/agentes/editar', ControladorAgentes.editar);
    app.post('/api/agentes/eliminar', ControladorAgentes.eliminar);
    app.post('/api/agentes/listar', ControladorAgentes.listar);
    
    app.post('/api/polizas/insertar', ControladorPolizas.insertar);
    app.post('/api/polizas/editar', ControladorPolizas.editar);
    app.post('/api/polizas/eliminar', ControladorPolizas.eliminar);
    app.post('/api/polizas/listar', ControladorPolizas.listar);
}