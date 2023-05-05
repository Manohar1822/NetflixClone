
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const findOrCreate=require("mongoose-findOrCreate");


const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.use(session({
    secret:"ManoharSecret",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/netflixDB");

const userSchema=new mongoose.Schema({
    username:{type:String,sparse:true,unique:false},
    password:String,
    name:String,
    phone:String,
    registered:Boolean
});

userSchema.plugin(passportLocalMongoose,{usernameField: 'username'});
userSchema.plugin(findOrCreate);

const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(function(user,done){
    done(null,user.id);
});
passport.deserializeUser(function(id,done){
    User.findById(id).then(function(user){
        done(null,user);
    }).catch(function(err){
        done(err,user);
    });
});


app.post("/registerEmail",function(req,res){
    const username=req.body.username;
    
    console.log("Inside post");
    res.render("createPassword",{Username:username,message:""});
})

app.post("/registerUser",function(req,res){
    const username=req.body.username;
    const names=req.body.name;
    const phone=req.body.phone;
    console.log("In the post /registeruser");
    User.register({username:req.body.username},req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("createPassword",{Username:username, message:"User Already Exists, Please try to login with same username"});
        }
        else{
            
            passport.authenticate("local")(req,res,function(){
                User.findOne({username:username}).then((foundUser) => {
                    foundUser.registered=true;
                    foundUser.name=names;
                    foundUser.phone=phone;
                    foundUser.save();
                });
                res.render("home",{Name:names});
            });
            
        }
        
    });
})



app.post("/signIn",function(req,res){
    const user=new User({
        username:req.body.username,
        password:req.body.password
    });
    User.findOne({username:req.body.username}).then(function(foundUser){
        if(!foundUser){
            res.render("signin",{message:"User Not Found, Please try to Register with same username"})
        }
        else{
            req.login(user,function(err){
                if(err){
                    console.log("User Not Found");
                    console.log(err);
                }
                else{
                    var names=""
                    passport.authenticate("local")(req,res,function(){
                        User.findOne({username:req.body.username}).then(function(foundUser){
                            names=foundUser.name;
                        });
                        res.render("home",{Name:names});
                    });
                }
            });
        }
    })
});


app.get("/signOut",function(req,res){
    req.logout(function(err){
        if(err){
            res.send(err);
        }
    });
    res.redirect("/");
})


app.get("/signIn",function(req,res){
    res.render("signIn",{message:""});
});
app.get("/",function(req,res){
    res.render("homePage");
});



app.listen(3000,function(){
    console.log("server started on port 3000");
});