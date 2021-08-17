const mongoose = require("mongoose");

//creating a database
const uri = "mongodb+srv://admin:admin@cluster0.osub7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4,
    serverSelectionTimeoutMS:50000
}).then(()=>{
    console.log("Connection successful")
}).catch((error)=>{
    console.log(error);
})
