const User=require('../model/model');
const router=require('express').Router();



router.post('/register',async (req,res)=>{

    const user=await User.findOne({
        number:req.body.number
    });
    if(user){
        return res.send('Email verified successfully');
    }
    else{
        res.send('Otp not matched');
    }
});

module.exports=router