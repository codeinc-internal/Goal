const mongoose = require('mongoose')

const ConnectDB= async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo db connected`);
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports=ConnectDB