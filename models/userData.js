
const mongoose = require('mongoose')
const userdata = mongoose.Schema(
    {
       name:
       {
            type:String,
            required:true
        },
        email:
       {
            type:String,
            required:true
        },
        number:
        {
            type:Number,
            required:true
        },
        country:
        {
            type:String,
            require:true
        },
        state:
        {
            type:String,
            require:true
        },
        city:
        {
            type:String,
            require:true
        },
        address:
        {
            type:String,
            require:true
        },
        zipcode:
        {
            type:String,
            require:true
        }, 
        image:
        {
            type:String,
            required:true
        }
    }
);

const Regstr = mongoose.model('registration',userdata);
module.exports = Regstr