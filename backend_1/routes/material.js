const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM material', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los materials

router.get('/material/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM material WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar material por su id  
    
//Agregar un nuevo material

router.post("/nuevo-material", (req, res) => {
    const { categoria, nombre, imagen } = req.body;
    let materialrray= [categoria, nombre, imagen];
    let nuevomaterial='INSERT INTO material {categoria, nombre, imagen}VALUES(?,?)';
    mysqlConnection.query(nuevomaterial, materialrray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:categoria + 'material creado'})
    }

})
}); //fin guardar nuevo material

router.put("/material/:id", (req, res) => {
    const { categoria, nombre, imagen } = req.body;
    const {id} = req.params;
    mysqlConnection.query('UPDATE material set categoria=?,nombre=?,imagen=? WERE id=?',
    [categoria, nombre, imagen, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'categoria' +categoria + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un material 

    router.delete("/material/:id", (req, res) => {
        const {id} = req.params;
        mysqlConnection.query('DELETE FROM material WERE id=?',
        [id],(err, rows, fields)=>{
            if(err){
                res.json({status:'material eliminado'})
            }else{
                console.log(err);
            }//fin si
        });//fin elimnar
    
       
        });//fin eliminar un material 

module.exports = router;