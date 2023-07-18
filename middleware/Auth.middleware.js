const jwt=require("jsonwebtoken");
require("dotenv").config()
const authenticate=(req,res,next)=>{
  
    const token=req.headers.authorization;

    if(token){
        jwt.verify(token,process.env.secreat_kay,(err,decoded)=>{
 
            if(decoded){
                
                req.body.userId=decoded.userId
                next();
            }else{
               res.send({"msg":"Please Login"})
            }
        });
       
    }else{
        res.send({"msg":"Please Login"})
    }
};

module.exports={
    authenticate
}
