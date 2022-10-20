
//Router setup for express
const express=require('express');
const router=express.Router();

//CORS setup
//corsConfig_master -> For route /
//corsConfig_query -> For route  /:id
const cors=require('cors');

const corsConfig_master={
    methods:"OPTIONS,GET,POST",
    maxAge:604800 //168 hours
};
const corsConfig_query={
    methods:"OPTIONS,GET,PUT,DELETE",
    maxAge:604800 //168 hours
}

//importing controller functions
const {
    getAllPatients,
    createPatient,
    updatePatient,
    deletePatient,

    getPatientById,
    updatePatientById,
    deletePatientById
}=require('../controllers/patientController');

//routes
//Check if the use of OPTIONS is right or wrong
router.route('/').options(cors(corsConfig_master)) //For OPTIONS (pre-flight request)
    .get(getAllPatients)
    .post(createPatient)
    .put(updatePatient)
    .delete(deletePatient)

router.route('/:id').options(cors(corsConfig_query)) //For OPTIONS (pre-flight request)
    .get(getPatientById)
    .put(updatePatientById)
    .delete(deletePatientById)

module.exports=router;