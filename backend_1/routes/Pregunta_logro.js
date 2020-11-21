const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM Pregunta_logro', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los Pregunta_logros

router.get('/Pregunta_logro/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM Pregunta_logro WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar Pregunta_logro por su id  
    
//Agregar un nuevo Pregunta_logro

router.post("/nueva-Pregunta_logro", (req, res) => {
    const { codigoL_logro, puntuacion} = req.body;
    let Pregunta_logrorray= [codigoL_logro, puntuacion];
    let nuevoPregunta_logro='INSERT INTO Pregunta_logro {codigoL_logro, puntuacion}VALUES(?,?)';
    mysqlConnection.query(nuevoPregunta_logro, Pregunta_logrorray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:codigoL_logro + 'Pregunta_logro creado'})
    }

})
}); //fin guardar nuevo Pregunta_logro

router.put("/Pregunta_logro/:id", (req, res) => {
    const { codigoL_logro, puntuacion} = req.body;
    const {id} = req.params;
    mysqlConnection.query('UPDATE Pregunta_logro set codigoL_logro=?,puntuacion=?,WERE id=?',
    [codigoL_logro, puntuacion, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'codigoL_logro' +codigoL_logro + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un Pregunta_logro 

    router.delete("/Pregunta_logro/:id", (req, res) => {
        const {id} = req.params;
        mysqlConnection.query('DELETE FROM Pregunta_logro WERE id=?',
        [id],(err, rows, fields)=>{
            if(err){
                res.json({status:'Pregunta_logro eliminado'})
            }else{
                console.log(err);
            }//fin si
        });//fin elimnar
    
       
        });//fin eliminar un Pregunta_logro 

module.exports = router;