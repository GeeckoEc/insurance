const db                =   require('../config/config');
const ModeloPoliza      =   {};
ModeloPoliza.Insertar  =   (poliza, resultado) => {
    const sql   =   `INSERT INTO polizas (tipo, fk_cliente, fk_agente) VALUES (?, ?, ?)`;
    db.query(
        sql, [
            poliza.tipo,
            poliza.cliente,
            poliza.poliza,
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al insertar: ', err);
                resultado(err, null);
            } else {
                console.log('El ID de la nueva póliza es: ', res.insertId);
                resultado(null, res.insertId);
            }
        }
    )
}

ModeloPoliza.Editar  =   (poliza, resultado) => {
    const sql   =   `UPDATE polizas SET tipo=? fk_agente=? fk_cliente=? WHERE id = ?`;
    db.query(
        sql, [
            poliza.tipo,
            poliza.agente,
            poliza.cliente,
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al editar: ', err);
                resultado(err, null);
            } else {
                console.log('La póliza ha sido editada: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloPoliza.Eliminar  =   (poliza, resultado) => {
    const sql   =   `DELETE FROM polizas WHERE id = ?`;
    db.query(
        sql, [
            poliza.id
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al eliminar: ', err);
                resultado(err, null);
            } else {
                console.log('La póliza ha sido eliminada: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloPoliza.Listar  =   (poliza, resultado) => {
    const sql   =   `SELECT polizas.id, polizas.tipo, agentes.nombre AS agente, clientes.nombre AS cliente FROM polizas INNER JOIN agentes ON polizas.fk_agente = agentes.id INNER JOIN clientes ON polizas.fk_cliente = clientes.id`;
    db.query(
        sql, (err, res) => {
            if (err) {
                console.log('Hubo un error al conseguir la lista de pólizas: ', err);
                resultado(err, null);
            } else {
                console.log(res);
                resultado(null, res);
            }
        }
    )
}
module.exports = ModeloPoliza;