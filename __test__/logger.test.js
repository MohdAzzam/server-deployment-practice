'use strict';
const logger = require('../src/middleware/logger');
// spy on calling the console log or not

describe('Validator middleware', ()=> {
    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();
    // when I use logger -> console.log has been called
    // hook for tests
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    
    // after the tests
    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('logs the output', ()=> {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });
    
});