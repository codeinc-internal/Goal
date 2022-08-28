const express = require('express')
const ConnectDB = require('./config/db')
const { errorHandler } = require('./Middleware/errorMiddleware')
const routerGoal = require('./routes/goalRoutes')
const cors = require('cors')
const dotenv = require('dotenv').config()
const path = require('path')

ConnectDB()

const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use('/api/goals',routerGoal)
app.use('/api/users', require('./routes/userRoutes'));
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,'../frontend/build')))


    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html')))
}else{
    app.get('/',(req,res)=>res.send('please set to production'))
}
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})