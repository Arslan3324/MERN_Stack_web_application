const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const routepath  = require('./routes/routes')
const { default: mongoose } = require('mongoose')

const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/MERN_STACK_WEB_APPLICATION')

app.use('/',routepath)

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use("/",express.static(path.resolve('uploads/')))


app.listen(3000,()=>{
    console.log("Hello I am Second_Mid Server Running")
})