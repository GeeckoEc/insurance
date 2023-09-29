const ControladorClientes = require('../controllers/clientes.controller');
module.exports = (app) => {
    app.post('/api/clientes/insertar', ControladorClientes.insertar);
    app.post('/api/clientes/editar', ControladorClientes.editar);
    app.post('/api/clientes/eliminar', ControladorClientes.eliminar);
}