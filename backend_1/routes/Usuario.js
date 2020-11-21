const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM Usuario', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los usuarios

router.get('/Usuario/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM Usuario WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar usuario por su id  
    
//Agregar un nuevo usuario

router.post("/nuevo-Usuario", (req, res) => {
    const { nombre, contraseña, correo } = req.body;
    let Usuariorray= [nombre, contraseña, correo];
    let nuevoUsuario='INSERT INTO Usuario {nombre, contraseña, correo}VALUES(?,?)';
    mysqlConnection.query(nuevoUsuario, Usuariorray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:nombre + 'Usuario creado'})
    }

})
}); //fin guardar nuevo usuario

router.put("/Usuario/:id", (req, res) => {
    const { nombre, contraseña, correo } = req.body;
    const {id} = req.params;
    mysqlConnection.query('UPDATE Usuario set nombre=?,contraseña=?,correo=? WERE id=?',
    [nombre, contraseña, correo, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'nombre' +nombre + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un usuario 

    router.delete("/Usuario/:id", (req, res) => {
        const {id} = req.params;
        mysqlConnection.query('DELETE FROM Usuario WERE id=?',
        [id],(err, rows, fields)=>{
            if(err){
                res.json({status:'Usuario eliminado'})
            }else{
                console.log(err);
            }//fin si
        });//fin elimnar
    
       
        });//fin eliminar un usuario 

module.exports = router;