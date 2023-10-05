const express   =   require ('express');
const app       =   express();
const http      =   require('http');
const logger    =   require('morgan');
const cors      =   require('cors');
const server    =   http.createServer(app);
const port      =   process.env.PORT || 3000;

// Importar rutas

const RutasClientes = require('./routes/clientes.route');
//const RutasAgentes  = require('./routes/agentes.route');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

server.listen(3000, '192.168.0.10' || 'localhost', () => {
    console.log('Aplicacion en NodeJS iniciando...\nID del proceso: ' + process.pid + ' \nA través del puerto: ' + port)
})

// CREAR RUTAS
app.get('/', (req, res) => {
    res.send('Ruta raiz de la app servidor de insurance.')
});

// Llamar a rutas de usuario

RutasClientes(app);
//RutasAgentes(app);


/*
app.get('/usuarios', (req, res) => {
    res.send('Ruta para USUARIOS de la app backend de entregas.')
});
*/

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack)
});