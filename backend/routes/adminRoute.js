const express=require('express');
const router=express.Router();

const {
    registerNewAdmin,
    login
}=require('../controllers/adminController');

router.route('/register-new-admin').post(registerNewAdmin); 
router.route('/login').post(login)

// //delete the below later
// router.route('/checkpassword').post((req,res)=>{
//     const realPassword=process.env.ADMIN_PASS;
//     const receivedPassword=req.body.key;
//     if(realPassword===receivedPassword){
//         res.status(200).json(1);
//     }
//     else{
//         res.status(401);
//         throw new Error('Bad credentials.');
//     }
// })




module.exports=router;