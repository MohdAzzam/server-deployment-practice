'use strict';
const express=require('express');
const errorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404.js');
const logger = require('./middleware/logger');
const validatror =require('./middleware/validator')
const booksRouter= require('./routes/book');
const actorRouter = require('./routes/actor');
const app=express();

// Global Middleware
app.use(logger);
app.use(express.json());

// attaching our routes module to the app obj

app.use(booksRouter);
app.use(actorRouter);
app.get('/person',validatror,(req,res)=>{
    const person =req.query.name;
    res.json({name:person});
})

app.get('/',(req,res)=>{
    res.status(200).send('Welcom to Our Home Page');
})
app.get('/info',(req,res)=>{
    res.status(200).json({
        name:'Mohammad Alazzam',
        age:27
    });
})


function start(port){
    app.listen(port,()=>console.log('Server Connect at PORT'+port));
}

app.get('/bad-request', (req,res)=> {
    throw new Error('manual error');
});

app.get('/bad-request-2', (req,res)=> {
    let arr;
    arr.push(2);
});
// Handlers -> Middlewares
app.use('*', notFoundHandler);
app.use(errorHandler);
// Modularity 
 
module.exports={
    app:app,
    start:start
}