const express = require('express')
const router = express.Router()
const db = require('../db/sql')

router.get('/createTable',(req,res)=>{
    const myQuery = 'CREATE TABLE posts(id int AUTO_INCREMENT PRIMARY KEY,title VARCHAR(255),body VARCHAR(255))';
    db.query(myQuery,(err,result)=>{
        if(err){
            throw err
        }
        res.send("table created!")
    })
})

router.post('/addPost',(req,res)=>{
    console.log(req.body)
    const myQuery='INSERT INTO posts SET ?';
    db.query(myQuery,req.body,(err,result)=>{
        if(err){
            throw err
        }
        res.send("record inserted")
    })
})
router.get('/post/:id',(req,res)=>{
    const myQuery=`SELECT * FROM posts WHERE id=${req.params.id}`
    db.query(myQuery,(err,result)=>{
        if(err)
        throw err
        res.send(result)
    })
})
router.get('/allPosts',(req,res)=>{
    const myQuery=`SELECT * FROM posts`
    db.query(myQuery,(err,result)=>{
        if(err)
        throw err
        res.send(result)
    })
})
router.put('/updatepost/:id',(req,res)=>{
    const newtitle={title:"mynode"}
    const myQuery=`UPDATE posts SET ? WHERE id=${req.params.id}`
    db.query(myQuery,newtitle,(err,result)=>{
        if(err)
        throw err
        res.send(result)
    })
})
router.get('/deletepost/:id',(req,res)=>{
    const myQuery=`DELETE FROM posts  WHERE id=${req.params.id}`
    db.query(myQuery,(err,result)=>{
        if(err)
        throw err
        res.send(result)
    })
})

module.exports=router