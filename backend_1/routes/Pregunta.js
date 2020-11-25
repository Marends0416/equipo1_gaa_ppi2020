const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM Pregunta', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los Preguntas

router.get('/Pregunta/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM Pregunta WHERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar Pregunta por su id  
    
//Agregar un nuevo Pregunta

router.post("/nueva-Pregunta", (req, res) => {
    const { titulo, imagen} = req.body;
    let Preguntarray= [titulo, imagen];
    let nuevoPregunta='INSERT INTO Pregunta {titulo, imagen}VALUES(?,?)';
    mysqlConnection.query(nuevoPregunta, Preguntarray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:titulo + 'Pregunta creado'})
    }

})
}); //fin guardar nuevo Pregunta

router.put("/Pregunta/:id", (req, res) => {
    const { titulo, imagen} = req.body;
    const {id} = req.params;
    mysqlConnection.query('UPDATE Pregunta set titulo=?,imagen=?,WHERE id=?',
    [titulo, imagen, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'titulo' +titulo + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un Pregunta 

    router.delete("/Pregunta/:id", (req, res) => {
        const {id} = req.params;
        mysqlConnection.query('DELETE FROM Pregunta WHERE id=?',
        [id],(err, rows, fields)=>{
            if(err){
                res.json({status:'Pregunta eliminado'})
            }else{
                console.log(err);
            }//fin si
        });//fin elimnar
    
       
        });//fin eliminar un Pregunta 

module.exports = router;