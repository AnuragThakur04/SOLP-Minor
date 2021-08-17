const mongoose = require("mongoose");
const validator = require("validator");


const loginschema = mongoose.Schema({
    username:{
        type:String,
        //required:true,
        minlength:3
    },
    password:{
        type:String,
        //required:true,
        minlength:8
    }
})

// we need to create a collection

const login = mongoose.model("Log",loginschema);
module.exports = login;