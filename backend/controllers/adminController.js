const bcrypt = require('bcryptjs/dist/bcrypt');
const asyncHandler=require('express-async-handler');
const fs=require('fs');
const jwt=require('jsonwebtoken');

const adminDataFileLocation=__dirname+'/../misc/adminData.json';

//@desc : register a new admin
//@route : /api/admin/register-new-admin
//@method : POST (private)
//@notes: need godcode header and in request body must have {adminId,username,password}
const registerNewAdmin=asyncHandler(async (req,res)=>{
    const {godcode}=req.headers;
    if(!godcode){
        res.status(403);
        throw new Error('Insufficient Privileges');
    }
    else{
        if(godcode!==process.env.GODCODE){
            res.status(403);
            throw new Error('Not god');
        }
        const {adminId,username,password}=req.body;
        if(!(adminId&&username&&password)){
            res.status(400);
            throw new Error('Bad data format');
        }
        encryptedPassword=await bcrypt.hash(password,10)
        const token=jwt.sign({adminId},process.env.JWT_SECRET);
        const fileData={adminId,username,password:encryptedPassword};
        fs.writeFile(adminDataFileLocation,JSON.stringify(fileData),(err)=>{
            if(err){throw new Error(err)}
            console.log('Written new admin file successfully!');
        })                               
        res.status(200).json({adminId,username,token})
    }
});

//@desc : login
//@route : /api/admin/login
//@method: POST
//@note: request body must have {username, password}
const login=asyncHandler(async (req,res)=>{
    const {username,password}=req.body;
    if(!(username&&password)){
        res.status(400);
        throw new Error('Bad data formatting');
    }

    const adminData=JSON.parse(fs.readFileSync(adminDataFileLocation));
    const adminId=adminData.adminId;
    const originalHashedPassword=adminData.password;

    if(!(await bcrypt.compare(password,originalHashedPassword))){
        res.status(403);
        throw new Error('Invalid Credentials');
    }
    const token=jwt.sign({adminId},process.env.JWT_SECRET)
    res.status(200).json({token});
})


module.exports={
    registerNewAdmin,
    login
}