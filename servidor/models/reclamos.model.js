const db                =   require('../config/config');
const ModeloReclamos      =   {};
ModeloReclamos.Insertar  =   (reclamo, resultado) => {
    const sql   =   `INSERT INTO reclamos (fecha, descripcion, fk_poliza) VALUES (?, ?, ?)`;
    db.query(
        sql, [
            reclamo.fecha,
            reclamo.descripcion,
            reclamo.poliza,
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al insertar: ', err);
                resultado(err, null);
            } else {
                console.log('El ID del nuevo reclamo es: ', res.insertId);
                resultado(null, res.insertId);
            }
        }
    )
}

ModeloReclamos.Editar  =   (reclamo, resultado) => {
    const sql   =   `UPDATE reclamos SET fecha=? descripcion=? fk_poliza=? WHERE id = ?`;
    db.query(
        sql, [
            reclamo.fecha,
            reclamo.descripcion,
            reclamo.poliza,
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al editar: ', err);
                resultado(err, null);
            } else {
                console.log('El reclamo ha sido editado: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloReclamos.Eliminar  =   (reclamo, resultado) => {
    const sql   =   `DELETE FROM reclamos WHERE id = ?`;
    db.query(
        sql, [
            reclamo.id
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al eliminar: ', err);
                resultado(err, null);
            } else {
                console.log('El reclamo ha sido eliminado: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloReclamos.Listar  =   (reclamo, resultado) => {
    const sql   =   `SELECT reclamos.id, reclamos.fecha, reclamos.descripcion, agentes.nombre AS agente, clientes.nombre AS cliente, polizas.tipo FROM reclamos INNER JOIN polizas ON reclamos.fk_poliza = polizas.id INNER JOIN agentes ON polizas.fk_agente = agentes.id INNER JOIN clientes ON polizas.fk_cliente = clientes.id`;
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
module.exports = ModeloReclamos;