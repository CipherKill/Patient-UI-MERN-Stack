
const express=require('express');
const router=express.Router();

const {
    getPages,
    getPageData
}=require('../controllers/pagingController');

// routes
router.route('/getpagescount/:entries').get(getPages);

router.route('/page/:entries/:num').get(getPageData);

module.exports=router;