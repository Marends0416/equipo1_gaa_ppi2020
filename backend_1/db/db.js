const mysql = require('mysql');
const mysqlConnection=mysql.createConnection(
{
host:'bt3vysdgbpyr13kmaytv-mysql.services.clever-cloud.com',
user: 'ui1kcqx2zfijmaby',
password: 'uiMeLIb6QK7KWdwgCDKg',
database: 'bt3vysdgbpyr13kmaytv',
multipleStatenants: true
});//fin createConnection

mysqlConnection.connect(function(err){
if(err){
console.error(err);
return;
}else{
console.log('base de datos conectada');
}
})
module.exports=mysqlConnection;