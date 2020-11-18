const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM consejo', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los consejos

router.get('/consejo/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM consejo WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar consejo por su id  
    
//Agregar un nuevo consejo

router.post("/nuevo-consejo", (req, res) => {
    const {titulo, imagen, descripcion} = req.body;
    let consejorray= [titulo, imagen, descripcion];
    let nuevoconsejo='INSERT INTO consejo {titulo, imagen, descripcion}VALUES(?,?)';
    mysqlConnection.query(nuevoconsejo, consejorray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:titulo + 'consejo creado'})
    }

})
}); //fin guardar nuevo consejo

router.put("/consejo/:id", (req, res) => {
    const {titulo, imagen, descripcion} = req.body;
    const id = req.params.id;
    mysqlConnection.query('UPDATE consejo settitulo=?,imagen=?,descripcion=? WERE id=?',
    [titulo, imagen, descripcion, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'titulo' +titulo + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un consejo 

    router.delete("/consejo/:id", (req, res) => {
        const { id } = req.body;
        const id = req.params.id;
        mysqlConnection.query('DELETE FROM consejo WERE id=?',
        [id],(err, rows, fields)=>{
            if(err){
                res.json({status:'consejo eliminado'})
            }else{
                console.log(err);
            }//fin si
        });//fin elimnar
    
       
        });//fin eliminar un consejo 

module.exports = router;
