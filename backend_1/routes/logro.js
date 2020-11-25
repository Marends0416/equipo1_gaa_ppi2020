const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM logro', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los logros

router.get('/logro/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM logro WHERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar logro por su id  
    
//Agregar un nuevo logro

router.post("/nuevo-logro", (req, res) => {
    const { titulo, lista, imagen } = req.body;
    let logrorray= [titulo, lista, imagen];
    let nuevologro='INSERT INTO logro {titulo, lista, imagen}VALUES(?,?)';
    mysqlConnection.query(nuevologro, logrorray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:titulo + 'logro creado'})
    }

})
}); //fin guardar nuevo logro

router.put("/logro/:id", (req, res) => {
    const { titulo, lista, imagen } = req.body;
    const {id} = req.params;
    mysqlConnection.query('UPDATE logro set titulo=?,lista=?,imagen=? WHERE id=?',
    [titulo, lista, imagen, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'titulo' +titulo + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un logro 

    router.delete("/logro/:id", (req, res) => {
        const {id} = req.params;
        mysqlConnection.query('DELETE FROM logro WHERE id=?',
        [id],(err, rows, fields)=>{
            if(err){
                res.json({status:'logro eliminado'})
            }else{
                console.log(err);
            }//fin si
        });//fin elimnar
    
       
        });//fin eliminar un logro 

module.exports = router;