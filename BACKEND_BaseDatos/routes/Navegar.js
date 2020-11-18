const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM Navegar', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los Navegars

router.get('/Navegar/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM Navegar WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar Navegar por su id  
    
//Agregar un nuevo Navegar

router.post("/nuevo-Navegar", (req, res) => {
    const { id_Usuario, id_material, id_ruta_ambiental } = req.body;
    let Navegarrray= [id_Usuario, id_material, id_ruta_ambiental];
    let nuevoNavegar='INSERT INTO Navegar {id_Usuario, id_material, id_ruta_ambiental}VALUES(?,?)';
    mysqlConnection.query(nuevoNavegar, Navegarrray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:id_Usuario + 'Navegar creado'})
    }

})
}); //fin guardar nuevo Navegar

router.put("/Navegar/:id", (req, res) => {
    const { id_Usuario, id_material, id_ruta_ambiental } = req.body;
    const id = req.params.id;
    mysqlConnection.query('UPDATE Navegar set id_Usuario=?,id_material=?,id_ruta_ambiental=? WERE id=?',
    [id_Usuario, id_material, id_ruta_ambiental, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'id_Usuario' +id_Usuario + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un Navegar 


module.exports = router;const express=require('express');
const router = express.Router();
const mysqlConnection = require ('../db/db');

router.get('/', (req, res) => {
mysqlConnection.query('SELECT * FROM Navegar', (err,rows,fields)=>{

    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }

})//fin conexion consultada
});//fin mostrar todos los Navegars

router.get('/Navegar/id:', (req, res) => {
const {id}= req.params;
mysqlConnection.query('SELECT * FROM Navegar WERE id= ?', [id], (err,rows,fields)=>{
    if(!err){
        res.json(rows[0]);
    } else {
        console.log(err);
    }

})//fin conexion consultada por id 

});//fin buscar Navegar por su id  
    
//Agregar un nuevo Navegar

router.post("/nuevo-Navegar", (req, res) => {
    const { id_Usuario, id_material, id_ruta_ambiental } = req.body;
    let Navegarrray= [id_Usuario, id_material, id_ruta_ambiental];
    let nuevoNavegar='INSERT INTO Navegar {id_Usuario, id_material, id_ruta_ambiental}VALUES(?,?)';
    mysqlConnection.query(nuevoNavegar, Navegarrray,(err,results,fields)=>{
    
    if(err){
        return console.error(err);
    }else{
        res.json({message:id_Usuario + 'Navegar creado'})
    }

})
}); //fin guardar nuevo Navegar

router.put("/Navegar/:id", (req, res) => {
    const { id_Usuario, id_material, id_ruta_ambiental } = req.body;
    const id = req.params.id;
    mysqlConnection.query('UPDATE Navegar set id_Usuario=?,id_material=?,id_ruta_ambiental=? WERE id=?',
    [id_Usuario, id_material, id_ruta_ambiental, id],(err, rows, fields)=>{
        if(err){
            res.json({status:'id_Usuario' +id_Usuario + 'actualizado'})
        }else{
            console.log(err);
        }//fin si
    })//fin consulta 

   
    });//fin modificar un Navegar 


module.exports = router;
