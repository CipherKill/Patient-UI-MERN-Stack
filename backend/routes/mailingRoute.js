
const express=require('express')
const router=express.Router();

const {
    getAllMails,
    addMail
}=require('../controllers/mailingController')

router.route('/all').get(getAllMails);
router.route('/add').post(addMail);

module.exports=router;