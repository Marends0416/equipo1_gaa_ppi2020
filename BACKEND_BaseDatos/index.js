const express= require('express');
const app = express(); 
// definir todos los componentes app
const Usuario= require('./routes/Usuario');// crud
const material = require('./routes/material');// crud
const ruta_ambiental = require('./routes/ruta_ambiental');// crud
const Navegar = require('./routes/Navegar');// crud
const consejo = require('./routes/consejo');// crud
const Pregunta = require('./routes/Pregunta');// crud
const Pregunta_logro = require('./routes/Pregunta_logro');// crud
const logro = require('./routes/logro');// crud
//modificar const 
//ajustes
app.set('port',3306) 
// Middleware
app.use(express.json()); 
// ajustess
app.use('/api',Usuario);
app.use('/api/material',material);
app.use('/api/ruta_ambiental',ruta_ambiental);
app.use('/api/Navegar',Navegar);
app.use('/api/consejo',consejo);
app.use('/api/Pregunta',Pregunta);
app.use('/api/Pregunta_logro',Pregunta_logro);
app.use('/api/logro',logro);
//modificar api 
app.listen(app.get('port'),()=> {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
    });
