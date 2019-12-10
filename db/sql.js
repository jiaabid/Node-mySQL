const mysql = require('mysql')
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodesql'
  });
  db.connect((err)=>{
      if(err){
          throw err
      }
      console.log("db connected")
  })
module.exports=db