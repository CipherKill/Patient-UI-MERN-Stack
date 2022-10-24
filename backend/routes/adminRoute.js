const express=require('express');
const router=express.Router();

const {
    registerNewAdmin,
    login
}=require('../controllers/adminController');

router.route('/register-new-admin').post(registerNewAdmin); 
router.route('/login').post(login)

module.exports=router;