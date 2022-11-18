const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:"./config.env"});

require('./db/conn');

app.use(express.json());
app.use(require("./router/auth"));

const middleware = (req,res,next)=>{
    console.log('hello from Middleware');
    next();
}

app.get('/', (req , res)=>{
    res.send('This is home');
})

app.get('/about', middleware, (req , res)=>{
    res.send('This is about');
})

app.get('/contact', (req , res)=>{
    res.send('This is contact');
})

app.get('/signin', (req , res)=>{
    res.send('This is signin');
})


app.listen(3000,()=>{
    console.log('server listen on port 3000')
})