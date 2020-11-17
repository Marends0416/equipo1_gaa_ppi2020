const express= require('express');
const app = express(); 
// definir todos los componentes, modulos app
const routes= require('./routes/Usuario');// crud
const modulos = require('./routes/material');// crud
const colegios = require('./routes/ruta_ambiental');// crud
const colegios = require('./routes/Navegar');// crud
const colegios = require('./routes/consejo');// crud
const colegios = require('./routes/Pregunta');// crud
const colegios = require('./routes/Pregunta_logro');// crud
const colegios = require('./routes/logro');// crud
//modificar const 
//ajustes
app.set('port',3000) 
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

