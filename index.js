const express =require('express');
const port ='8080';
const app =express();

const cors=require('cors');
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };

  app.get('/',(req,res)=>{
    res.send("In hello World!!");
});

app.get('/getData',(req,res)=>{
    res.send("In Get Data!!");
});

app.listen(port, ()=>{
    console.log("Listening to port: "+ port)
});