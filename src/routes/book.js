'use strict';

const express = require('express');
const router = express.Router();

const Book=require('../models/books');

const bookInstance=new Book();

router.get('/book',(req,res)=>{
    let books=bookInstance.get();
    res.status(200).json(books);
});

router.get('/book/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    let book = bookInstance.get(id);
    res.status(200).json(book);

});

router.post('/book',(req,res)=>{
    let data=req.body;
    let newBook=bookInstance.create(data);
    res.status(201).json(newBook);
})

router.put('/book/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    const data=req.body;
    let updatedBook=bookInstance.update(id,data);
    res.status(204).json(updatedBook);
})

router.delete('/book/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    let deletedBook=bookInstance.delete(id);
    let message=deletedBook ? 'Book deleted successfuly' : 'book not found';
    let statusCode = deletedBook ? 202 : 204;
    res.status(statusCode).json({
        msg:message,
        deletedBook:deletedBook
    })
})


module.exports=router;