const express =require('express');
const asyncHandler =require('express-async-handler');//try catch asyn function
const User = require( '../services/user');


const router =express.Router();

router.get('/',(req,res)=>{
    if(req.session.userId){
       return res.redirect('/home');
    }
    res.render('login');
})
router.post('/',asyncHandler(async (req,res)=>{
    const user = await User.findUserByEmail(req.body.email);
    if(!user||!User.verifyPassWord(req.body.password,user.password)&&user.token == null){
        return res.render('login');

    }
    else if(user.token!=null){
        return res.render('active');
    }
    req.session.userId=user.id;
    res.redirect('/home')
}));


module.exports = router;