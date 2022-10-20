
const asyncHandler=require('express-async-handler');
const patientTable=require('../models/patientDetailsModel');
const NAME_PATTERN=/^[A-Z][A-Za-z ]{3,20}$/;
const DESC_PATTERN=/^[A-Za-z0-9 .,]+$/;

//@desc: Get all patients
//@route: /api/patients
//@method: GET
const getAllPatients=asyncHandler(async (req,res)=>{
    const data=await patientTable.find();
    if(data){
        res.status(200).json(data);
    }
    else{
        throw new Error('No patient data found');
    }
});

//@desc: Create new patient
//@route: /api/patients
//@method: POST
const createPatient=asyncHandler(async (req,res)=>{
    const {patientId,name,desc}=req.body;
    if(patientId&&name&&desc){
        const dbresult=await patientTable.create({patientId,name,desc});
        res.status(201).json({message:'created',data:dbresult});
    }
    else{
        res.status(400);
        throw new Error('Bad Request');
    }
});

//@desc: Update patient (NOT ALLOWED)
//@route: /api/patients
//@method: PUT
const updatePatient=asyncHandler((req,res)=>{
    res.status(405);
    throw new Error('Method not allowed');
});

//@desc: Delete patient(NOT ALLOWED)
//@route: /api/patient
//@method: DELETE
const deletePatient=asyncHandler((req,res)=>{
    res.status(405);
    throw new Error('Method not allowed');
});

//other route ------

//@desc: Get the patient details by id
//@route: /api/patient/:id
//@method: GET
const getPatientById=asyncHandler(async (req,res)=>{
    const patientId=req.params.id;
    if(patientId){
        const result=await patientTable.find({patientId})
        res.status(200).json(result);
    }
    else{
        res.status(400);
        throw new Error('Bad request');
    }
})

//@desc: Update patient details
//@route: /api/patient/:id
//@method: PUT
const updatePatientById=asyncHandler(async (req,res)=>{
    const {patientId,name,desc}=req.body;
    if(name&&desc&&patientId){
        const check1=NAME_PATTERN.test(name);
        const check2=DESC_PATTERN.test(desc);
        if((check1&&check2)===true){
            const result=await patientTable.findOneAndUpdate({patientId},{name,desc});
            res.status(200).json({message:'updated',data:result})
        }
    }
    else{
        res.status(400);
        throw new Error('Bad data format request');
    }
})

//@desc: Delete the specific patient
//@route: /api/patient/:id
//@method: DELETE
const deletePatientById=asyncHandler(async (req,res)=>{
    const patientId=req.params.id;
    if(!patientId){
        res.status(400);
        throw new Error('Bad data request.');
    }
    else{
        const result=await patientTable.findOneAndDelete({patientId});
        if(!result){
            res.status(400);
            throw new Error('Malformed data.')
        }
        else{
            res.status(200).json({message:'deleted',data:result});
        }
    }
})


module.exports={
    getAllPatients,
    createPatient,
    updatePatient,
    deletePatient,

    getPatientById,
    updatePatientById,
    deletePatientById
};