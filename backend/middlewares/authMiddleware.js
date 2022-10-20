const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');
const fs=require('fs');
const res = require('express/lib/response');


const protect=asyncHandler(async (req,res,next)=>{
    let token;
    try{
        if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            
            const realAdminId=JSON.parse(fs.readFileSync(__dirname+'/../misc/adminData.json')).adminId;
            const tokenAdminId=decoded.adminId;

            if(realAdminId===tokenAdminId) next();
            else throw "Not Authorized";
        }
        else{
            throw "Not Authorized";
        }
    }
    catch(err){
        res.status(401);
        throw new Error(err);
        }
})

module.exports={protect}