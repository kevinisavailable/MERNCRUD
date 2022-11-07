import  express  from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";

const app = express()
const PORT = process.env.PORT || 3000;
dotenv.config()


// mongoose.connect(process.env.MONGODB_URL)
// .then(()=>{console.log("Database Connection Established")})
// .catch((err)=>{console.log(err)})



app.listen(PORT , ()=>{
    console.log(`Server Started and is listening at port ${PORT}`)
})