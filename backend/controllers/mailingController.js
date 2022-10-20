
const asyncHandler=require('express-async-handler');
const mailingListTable=require('../models/mailingListModel');

//@desc: get the mailing list
//@route: /mailing/all
//@method: GET
const getAllMails=asyncHandler(async (req,res)=>{
    const result=await mailingListTable.find();
    res.status(200).json(result);
})

//@desc: add a mail to mailing list
//@route: /mailing/add
//@method: POST
const addMail=asyncHandler(async (req,res)=>{
    const {username,email,contact}=req.body;
    if(username&&email&&contact){
        const result=await mailingListTable.create({username,email,contact});
        res.status(200).json({message:'created',data:result})
    }
    else{
        res.status(400);
        throw new Error('Bad request');
    }
})

module.exports={
    getAllMails,
    addMail
}