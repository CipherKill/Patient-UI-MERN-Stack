const express=require('express')
const router=express.Router();

const {protect}=require('../middlewares/authMiddleware');

const {
    getAllMails,
    addMail
}=require('../controllers/mailingController')

router.route('/all').get(protect,getAllMails);
router.route('/add').post(addMail);

module.exports=router;