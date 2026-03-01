
const jwt = require("jsonwebtoken")
const authmiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({})
    }
    const token = authHeader.split(' ')[1];
    const  secret = process.env.SECRET_KEY;
    try{
        const decode = jwt.verify(token,secret)
        req.userId = decode.userId;
        next()

    }
    catch(err){
        return res.status(403).json({msg:"error"})
    }

}

module.exports=authmiddleware;