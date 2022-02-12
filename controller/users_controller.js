const User = require('../model/userSchema');
module.exports.user_SignUp = function(req , res){
    return res.render('user_Up');
}

module.exports.user_SignIn = function(req , res){
    return res.render('user_In');
}

module.exports.verify=function(req ,res){
    
}
module.exports.create=function(req ,res){
    if(req.body.password!=req.body.confirm_password)
   { return res.redirect('back');}
    User.findOne({email:req.body.email} , function(err , user){
         if(err){
         console.log("Error in signing up th user");
        return ;}
         if(!user){
             User.create(req.body , function(err , user){
                if(err){
                console.log("Error in creatig the user");
               return ;}
               return res.redirect('/users/signIn');
         })
}else{
    return res.redirect('back');
}
    });
}