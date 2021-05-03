module.exports = (req, res, next)=> {
    console.log('__LOGGER MIDDLEWARE__ Path:',req.path, 'method=', req.method);
    // this is very important
    next();
}