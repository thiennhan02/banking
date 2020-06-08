const User =require('../services/user')
module.exports=(async function auth(req,res,next){
    const userId = req.session.userId;
    res.locals.currentUser = null;
    if(!userId){
        return next();
    }
    const user = await User.findById(userId);
    if(!user){
        return next();
    }
    req.currentUser=user;
    res.locals.currentUser=user;
    next();
});