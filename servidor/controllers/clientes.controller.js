const ModeloClientes = require('../models/clientes.model');
module.exports = {
    insertar(req, res){
        const clientes = req.body;   //Captura los datos que evía elcliente.
        ModeloClientes.Insertar(clientes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al guardar el cliente: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'El cliente se guardó con éxito.',
                data:       datos
            })
        });
    },

    editar(req, res){
        const clientes = req.body;   //Captura los datos que evía elcliente.
        ModeloClientes.Editar(clientes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al editar el cliente: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'El cliente se editó con éxito.',
                data:       datos
            })
        });
    },

    eliminar(req, res){
        const clientes = req.body;   //Captura los datos que evía elcliente.
        ModeloClientes.Eliminar(clientes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al eliminar el cliente: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'El cliente se eliminó con éxito.',
                data:       datos
            })
        });
    },

    listar(req, res){
        const clientes = req.body;   //Captura los datos que evía elcliente.
        ModeloClientes.Listar(clientes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error con la lista de clientes: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'Lista de clientes completada.',
                data:       datos
            })
        });
    }
};