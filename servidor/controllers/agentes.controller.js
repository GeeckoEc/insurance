const ModeloAgentes = require('../models/agentes.model');
module.exports = {
    insertar(req, res){
        const agentes = req.body;   
        ModeloAgentes.Insertar(agentes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al guardar el agente: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'El agente se guardó con éxito.',
                data:       datos
            })
        });
    },

    editar(req, res){
        const agentes = req.body;   
        ModeloAgentes.Editar(agentes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al editar el agente: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'El agente se editó con éxito.',
                data:       datos
            })
        });
    },

    eliminar(req, res){
        const agentes = req.body;   
        ModeloAgentes.Eliminar(agentes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error al eliminar el agente: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'El agente se eliminó con éxito.',
                data:       datos
            })
        });
    },

    listar(req, res){
        const agentes = req.body;   
        ModeloAgentes.Listar(agentes, (err, datos) => {
            if (err) {
                return res.status(501).json({
                    success:    false,
                    message:    'Ocurrió un error con la lista de agentes: ',
                    error:      err
                });
            }
            return res.status(200).json({
                success:    true,
                message:    'Lista de agentes completada.',
                data:       datos
            })
        });
    }
};