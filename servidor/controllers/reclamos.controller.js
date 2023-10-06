const ModeloReclamos = require('../models/reclamos.model');
module.exports = {
    insertar(req, res){
        const reclamos = req.body;
        ModeloReclamos.Insertar(reclamos, (err, datos) => {
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
        const reclamos = req.body;
        ModeloReclamos.Editar(reclamos, (err, datos) => {
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
        const reclamos = req.body;
        ModeloReclamos.Eliminar(reclamos, (err, datos) => {
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
        const reclamos = req.body;
        ModeloReclamos.Listar(reclamos, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error con la lista de reclamos: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'Lista de reclamos completada.',
                data:       datos
            })
        });
    }
};