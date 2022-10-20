const mongoose=require('mongoose');

const patientDetailsSchema=new mongoose.Schema(
    {
        patientId:{
            type:Number,
            required:[true,"patientID is missing"],
            unique:true
        },
        name:{
            type:String,
            required:[true,"Patient name is missing"]
        },
        desc:{
            type:String,
            required:[true,"Description is missing"]
        }
    },
    {
        timestamps:true
    }
);

module.exports=mongoose.model('patient-details',patientDetailsSchema);