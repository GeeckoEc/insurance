const db                =   require('../config/config');
const ModeloCliente     =   {};
ModeloCliente.Insertar  =   (cliente, resultado) => {
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

ModeloCliente.Editar  =   (cliente, resultado) => {
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

ModeloCliente.Eliminar  =   (cliente, resultado) => {
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

ModeloCliente.Listar  =   (cliente, resultado) => {
    const sql   =   `SELECT CONVERT(id, char) AS id, nombre FROM clientes`;
    db.query(
        sql, (err, res) => {
            if (err) {
                console.log('Hubo un error al conseguir la lista de clientes : ', err);
                resultado(err, null);
            } else {
                console.log(res);
                resultado(null, res);
            }
        }
    )
}
module.exports = ModeloCliente;