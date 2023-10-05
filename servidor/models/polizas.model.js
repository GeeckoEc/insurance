const db                =   require('../config/config');
const ModeloPoliza      =   {};
ModeloPoliza.Insertar  =   (poliza, resultado) => {
    const sql   =   `INSERT INTO polizas (tipo, fk_cliente, fk_agente) VALUES (?, ?, ?)`;
    db.query(
        sql, [
            poliza.tipo,
            poliza.cliente,
            poliza.agente,
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

ModeloAgente.Editar  =   (agente, resultado) => {
    const sql   =   `UPDATE agentes SET nombre=? WHERE id = ?`;
    db.query(
        sql, [
            agente.nombre,
            agente.id
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al editar: ', err);
                resultado(err, null);
            } else {
                console.log('El agente ha sido editado: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloAgente.Eliminar  =   (agente, resultado) => {
    const sql   =   `DELETE FROM agentes WHERE id = ?`;
    db.query(
        sql, [
            agente.id
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al eliminar: ', err);
                resultado(err, null);
            } else {
                console.log('El agente ha sido eliminado: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloAgente.Listar  =   (agente, resultado) => {
    const sql   =   `SELECT id, nombre FROM agentes`;
    db.query(
        sql, (err, res) => {
            if (err) {
                console.log('Hubo un error al conseguir la lista de agentes : ', err);
                resultado(err, null);
            } else {
                console.log(res);
                resultado(null, res);
            }
        }
    )
}
module.exports = ModeloAgente;