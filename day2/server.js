const express = require("express")

const app = express()//server instance create 

app.get('/',(req,res)=>{
    res.send("hello ")
})
app.get('/about',function(req,res){
    res.send("This is about page")
})
app.get('/home',(req,res)=>{
    res.send("this is home page")
})
app.listen(3000) // server start