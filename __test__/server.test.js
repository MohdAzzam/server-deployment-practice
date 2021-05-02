'use strict';

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

});
