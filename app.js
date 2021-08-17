const express = require("express");
const path = require("path");
require("./srcc/db/conn");
const User = require("./srcc/models/usermessage");
const Register = require("./srcc/models/register");
const hbs = require("hbs"); 
const { registerPartials } = require ("hbs");
const { expr } = require("jquery");
const login = require("./srcc/models/login");
const register = require("./srcc/models/register");
const { resolveSoa } = require("dns");
const  app = express();
const port = process.env.PORT || 3000;

//setting the path
const staticpath =  path.join(__dirname , "public");
const templatepath =  path.join(__dirname , "templates/views");
const partialpath =  path.join(__dirname , "templates/partials");

//middleware
app.use(`/css` , express.static(path.join(__dirname,"node_modules/bootstrap/dist/css")));
app.use(`/js` , express.static(path.join(__dirname,"node_modules/bootstrap/dist/js")));
app.use(`/jq` , express.static(path.join(__dirname,"node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use( express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("email_sent");
    } catch (error) {
        res.status(500).send(error);
    }
    
})

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login" , async(req , res)=>{
    try {
        
            const username = req.body.username;
            const password = req.body.password;

            const useremail = await Register.findOne({username:username});
            if(useremail.password === password){
                res.status(201).render("user_service");
            }
            else{
                res.send("Invalid login!");
            }


    } catch (error) {
        res.status(500).send("Username doesn't exist !")
    }
})

app.post("/contact" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new User(req.body)
       await userData.save();
       res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})



app.get("/notes",(req,res)=>{
    res.render("notes");
});

app.post("/notes" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("notes");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/lectures",(req,res)=>{
    res.render("lectures");
});

app.post("/lectures" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("lectures");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/blogs",(req,res)=>{
    res.render("blogs");
});

app.post("/blogs" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("blogs");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.post("/contact" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("contact");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/suggestions",(req,res)=>{
    res.render("suggestions");
});

app.post("/suggestions" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("suggestions");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/infosys",(req,res)=>{
    res.render("infosys");
});

app.post("/infosys" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("infosys");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/wipro",(req,res)=>{
    res.render("wipro");
});

app.post("/wipro" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("wipro");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/accenture",(req,res)=>{
    res.render("accenture");
});

app.post("/accenture" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("accenture");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/email_sent",(req,res)=>{
    res.render("email_sent");
});

app.post("/email_sent" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("login");
    } catch (error) {
        res.status(500).send(error);
    }
})


app.get("/chatform",(req,res)=>{
    res.render("chatform");
});

app.post("/chatform" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("chatform");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/about",(req,res)=>{
    res.render("about");
});

app.post("/about" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("about");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/more",(req,res)=>{
    res.render("more");
});

app.post("/more" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("more");
    } catch (error) {
        res.status(500).send(error);
    }
})









// server create 
app.listen(port , ()=> {
    console.log(`server is running at port no ${port}`);
})
