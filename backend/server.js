
const colors=require('colors');
const dotenv=require('dotenv').config();
const express=require('express');
const cors=require('cors');
const connectDB = require('./config/db');

const app=express();
app.use(express.json());
app.use(cors());
const PORT=process.env.PORT||3001;


//check if teh main api point is working
app.get('/',(req,res)=>res.status(200).json({status:"Working"}));

app.use('/api/patients',require('./routes/patientRoutes'));
app.use('/api/patients/paging',require('./routes/pagingRoutes'));
app.use('/api/mailing',require('./routes/mailingRoute'));
app.use('/api/admin',require('./routes/adminRoute'));

app.use(require('./middlewares/errorMiddleware')); //common error handler

//check if success in db and then listen for connections
connectDB().then(()=>app.listen(PORT,()=>console.log(`listening at port ${PORT}...`)));


