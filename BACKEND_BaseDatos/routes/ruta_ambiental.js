const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM ruta_ambiental', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los ruta_ambientals

router.get('/ruta_ambiental/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM ruta_ambiental WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar ruta_ambiental por su id  
    
//Agregar un nuevo ruta_ambiental

router.post("/nuevo-ruta_ambiental", (req, res) => {
    const { titulo, imagen, descripcion } = req.body;
    let ruta_ambientalrray= [titulo, imagen, descripcion];
    let nuevoruta_ambiental='INSERT INTO ruta_ambiental {titulo, imagen, descripcion}VALUES(?,?)';
    mysqlConnection.query(nuevoruta_ambiental, ruta_ambientalrray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:titulo + 'ruta_ambiental creado'})
    }

})
}); //fin guardar nuevo ruta_ambiental

router.put("/ruta_ambiental/:id", (req, res) => {
    const { titulo, imagen, descripcion } = req.body;
    const id = req.params.id;
    mysqlConnection.query('UPDATE ruta_ambiental set titulo=?,imagen=?,descripcion=? WERE id=?',
    [titulo, imagen, descripcion, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'titulo' +titulo + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un ruta_ambiental 


module.exports = router
