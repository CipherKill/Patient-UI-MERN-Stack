
const asyncHandler=require('express-async-handler');
const patientTable=require('../models/patientDetailsModel');

const getTotalCount=async ()=>{return await patientTable.countDocuments({})}

//@desc: Get the number of pages needed based on entries (example: num of pages needed for 5 entires)
//@route: /api/patients/paging/getpages/:entries
//@method: GET
const getPages=asyncHandler(async (req,res)=>{
    const totalCount=await getTotalCount();
    const entries=req.params.entries;
    if(totalCount>=entries){
        const pages=totalCount/entries;
        res.status(200).json(Math.ceil(pages));
    }
    else{
        res.status(400);
        throw new Error('Entries exceeds the required amount');
    }
});

//@desc: Get the contents of page 'n'
//@route: /api/patients/paging/page/:num/:of
//@method: GET
const getPageData=asyncHandler(async (req,res)=>{
    const pageNumber=req.params.num;
    const entriesPerPage=req.params.entries;
    const pageLimit=Math.ceil((await getTotalCount())/entriesPerPage);
    if(pageNumber<=pageLimit){
        const result=await patientTable.find().skip((pageNumber-1)*entriesPerPage).limit(entriesPerPage);
        res.status(200).json(result);
    }
    else{
        res.status(400);
        throw new Error('Page number is greater than page limit!');
    }
});

module.exports={
    getPages,
    getPageData
};