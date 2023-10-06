const ModeloPolizas = require('../models/polizas.model');
module.exports = {
    insertar(req, res){
        const polizas = req.body;
        ModeloPolizas.Insertar(polizas, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al guardar la póliza: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'La póliza se guardó con éxito.',
                data:       datos
            })
        });
    },

    editar(req, res){
        const polizas = req.body;
        ModeloPolizas.Editar(polizas, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al editar la póliza: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'La póliza se editó con éxito.',
                data:       datos
            })
        });
    },

    eliminar(req, res){
        const polizas = req.body;
        ModeloPolizas.Eliminar(polizas, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al eliminar la póliza: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'La póliza se eliminó con éxito.',
                data:       datos
            })
        });
    },

    listar(req, res){
        const polizas = req.body;
        ModeloPolizas.Listar(polizas, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error con la lista de pólizas: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'Lista de pólizas completada.',
                data:       datos
            })
        });
    }
};