'use strict';
//for testing ci/cd
const server = require('../src/server');
const superTest=require('supertest');
const serverRequest=superTest(server.app);

describe('Testing Server Moudle',()=>{
    it('Handel not Found Route',
        async ()=>{
            let response = await serverRequest.get('/not-found-route');
            expect(response.status).toEqual(404);
        });
    it('Handels errors',async ()=>{
        let response=await serverRequest.get('/bad-request');
        expect(response.status).toEqual(500);
    });
    it('Handels Home Route',async ()=>{
        let response=await serverRequest.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Welcom to Our Home Page');
    });
    it('Handels Info Route',async ()=>{
        let response=await serverRequest.get('/info');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({
            name:'Mohammad Alazzam',
            age:27
        });
    });
    it('Handels bad-request-2 Route',async ()=>{
        let response=await serverRequest.get('/bad-request-2');
        expect(response.status).toEqual(500);
        expect(response.body).toEqual({"err": {}, "message": "Server ERROR Cannot read property 'push' of undefined", "path": "/bad-request-2", "query": {}});
    });
    it('no name in the query string',async ()=>{
        let response=await serverRequest.get('/person');
        expect(response.status).toEqual(500);
        expect(response.body).toEqual({"err": "no name", "message": "Server ERROR undefined", "path":"/person","query":{}});
    });
    it('name in the query string',async ()=>{
        let response=await serverRequest.get('/person?name=azzam');
        expect(response.status).toEqual(200);
    });
    it(' name in the query string, the output object is correct',async ()=>{
        let response=await serverRequest.get('/person?name=azzam');
        expect(response.status).toEqual(200);
        expect(response.body).toEqual({name:"azzam"});
    });
    //book 
    it('return 200 if all books return',async ()=>{
        let response=await serverRequest.get('/book');
        expect(response.status).toEqual(200);
    });
    it('return 200 if the book return ',async ()=>{
        let response=await serverRequest.get('/book/1');
        expect(response.status).toEqual(200);
    });
    it('return 201 if the book add',async ()=>{
        let response=await serverRequest.post('/book');
        expect(response.status).toEqual(201);
    });
    
    it('return 204 if the book updated',async ()=>{
        let response=await serverRequest.put('/book/1');
        expect(response.status).toEqual(204);
    });
    it('return 202 if the book deleted',async ()=>{
        let response=await serverRequest.delete('/book/1');
        expect(response.status).toEqual(202);
    });
    
    it('return 204 if the book not found',async ()=>{
        let response=await serverRequest.delete('/book/1');
        expect(response.status).toEqual(204);
    });

    // actor
    
    it('return 200 if all actors return',async ()=>{
        let response=await serverRequest.get('/actor');
        expect(response.status).toEqual(200);
    });
    it('return 200 if the actor return ',async ()=>{
        let response=await serverRequest.get('/actor/1');
        expect(response.status).toEqual(200);
    });
    it('return 201 if the actor add',async ()=>{
        let response=await serverRequest.post('/actor');
        expect(response.status).toEqual(201);
    });
    
    it('return 204 if the actor updated',async ()=>{
        let response=await serverRequest.put('/actor/1');
        expect(response.status).toEqual(204);
    });
    it('return 202 if the actor deleted',async ()=>{
        let response=await serverRequest.delete('/actor/1');
        expect(response.status).toEqual(202);
    });
    
    it('return 204 if the actor not found',async ()=>{
        let response=await serverRequest.delete('/actor/1');
        expect(response.status).toEqual(204);
    });
});
