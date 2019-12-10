const express = require('express')
const app = express()
const path = require('path')
require('./db/sql')
const queryRoutes = require('./routes/route')
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(queryRoutes)

  //creating db then connecting
//   app.get('/createdb',(req,res)=>{
//       const sql = 'CREATE DATABASE nodesql';
//       db.query(sql,(err,result)=>{
//           if(err){
//               throw err
//           }
//           console.log(result)
//           res.send("db created and connected")
//       })
//   })
app.listen('3000',()=>{
    console.log('server connected')
})