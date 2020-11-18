const express = require('express');
const router = express.Router(); 
const mysqlConnection = require('../db/db');

router.get('/Usuario ',(req,res)=>{
mysqlConnection.Query('SELECT * FROM Usuario ',(err, rows, fields) =>{
    if(!err){
        res.json(rows);
    } else {
        console.log(err);
    }
});
});




module.exports = router; 
