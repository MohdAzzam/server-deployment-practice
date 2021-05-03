'use strict';
//for testing ci/cd
const server = require('../server');
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
});
