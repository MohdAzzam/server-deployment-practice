'use strict'
const validatror =require('../src/middleware/validator');

describe('check Name validator',()=>{
    let req = {};
    let res = {};
    let next = jest.fn();
    it('check person', ()=> {
        validatror(req,res,next);
        expect(next).toHaveBeenCalled();
    });
    
})