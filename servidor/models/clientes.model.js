const db                =   require('../config/config');
const ModeloCliente     =   {};
ModeloCliente.Insertar  =   (cliente, reultado) => {
    const sql   =   `INSERT INTO clientes (nombre) VALUES (?)`;
    db.query(
        sql, [
            cliente.nombre
        ], (err, res) => {
            if (err) {
                console.log('Hubo un error: ', err);
                resultado(err, null);
            } else {
                console.log('El ID del nuevo cliente es: ', res.insertId);
                resultado(null, res.insertId);
            }
        }
    )
}
module.exports = ModeloCliente;