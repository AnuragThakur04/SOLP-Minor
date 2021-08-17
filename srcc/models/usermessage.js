const mongoose = require("mongoose");
const validator = require("validator");


const userschema = mongoose.Schema({
    name:{
        type:String,
        //required:true,
        minlength:3
    },
    email:{
        type:String,
        //required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email!!")
            }
        }
    },
    phone:{
        type:Number,
        //required:true,
        min:10
    },
    message:{
        type:String,
        //required:true,
        minlength:3
    }
})

// we need to create a collection

const User = mongoose.model("User",userschema);
module.exports = User;