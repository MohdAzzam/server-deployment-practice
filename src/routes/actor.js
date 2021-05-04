'use strict';

const express = require('express');
const router = express.Router();

const Actor=require('../models/actors');

const actorInstance=new Actor();

router.get('/actor',(req,res)=>{
    let actors=actorInstance.get();
    res.status(200).json(actors);
});

router.get('/actor/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    let actor = actorInstance.get(id);
    res.status(200).json(actor);

});

router.post('/actor',(req,res)=>{
    let data=req.body;
    let newactor=actorInstance.create(data);
    res.status(201).json(newactor);
})

router.put('/actor/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    const data=req.body;
    let updatedactor=actorInstance.update(id,data);
    res.status(204).json(updatedactor);
})

router.delete('/actor/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    let deletedactor=actorInstance.delete(id);
    let message=deletedactor ? 'actor deleted successfuly' : 'actor not found';
    let statusCode = deletedactor ? 202 : 204;
    res.status(statusCode).json({
        msg:message,
        deletedactor:deletedactor
    })
})


module.exports=router;