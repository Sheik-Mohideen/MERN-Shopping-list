const express=require('express');
const router=express.Router();

//Item model

const User=require('../../models/User');

router.post('/',(req,res)=>
{
    res.send('register')
});

module.exports=router;