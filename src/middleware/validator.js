'use strict';
module.exports=(req,res,next)=>{
   if(req.query){
        if(req.query.name){
            next();
        }else{
            next('no name')
        }
   }else{
       next('Somthing went wrong')
   }
}