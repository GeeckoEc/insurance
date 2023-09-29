const db                =   require('../config/config');
const ModeloCliente     =   {};
ModeloCliente.Insertar  =   (cliente, reultado) => {
    const sql   =   `INSERT INTO clientes (nombre) VALUES (?)`;
    db.query(
        sql, [
            cliente.nombre
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al insertar: ', err);
                resultado(err, null);
            } else {
                console.log('El ID del nuevo cliente es: ', res.insertId);
                resultado(null, res.insertId);
            }
        }
    )
}

ModeloCliente.Editar  =   (cliente, reultado) => {
    const sql   =   `UPDATE clientes SET nombre=? WHERE id = ?`;
    db.query(
        sql, [
            cliente.nombre,
            cliente.id
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al editar: ', err);
                resultado(err, null);
            } else {
                console.log('El cliente ha sido editado: ', res);
                resultado(null, res);
            }
        }
    )
}

ModeloCliente.Eliminar  =   (cliente, reultado) => {
    const sql   =   `DELETE FROM clientes WHERE id = ?`;
    db.query(
        sql, [
            cliente.id
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error al eliminar: ', err);
                resultado(err, null);
            } else {
                console.log('El cliente ha sido eliminado: ', res);
                resultado(null, res);
            }
        }
    )
}
module.exports = ModeloCliente;