const mongoose=require('mongoose');

const mailingListSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Username not provided"]
        },
        email:{
            type:String,
            required:[true,"Email not provided"]
        },
        contact:{
            type:String,
            required:[true,'Contact information not provided']
        }
    },
    {
        timestaps:true
    }
);

module.exports=mongoose.model('mailing-list',mailingListSchema);