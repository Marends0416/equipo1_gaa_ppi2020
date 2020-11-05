const express = require('express');
const app = express();
const routes = require('./routes/routes');

//Ajustes
app.set('port',3000);

//Middlewares
app.use(express.json());

//Ajustes del servidor
app.use('/api',routes);
app.listen(app.get('port'),()=> {
console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});