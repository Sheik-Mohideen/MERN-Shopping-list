const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const config=require('config');
const jwt=require('jsonwebtoken');
const auth=require('../../middleware/auth');
//Item model

const User=require('../../models/User');

router.post('/',(req,res)=>
{
    const {email,password} =req.body;

    //Simple validation
    if(!email ||!password)
    {
        return res.status(404).json({msg: 'Please enter all the fields'})
    }

    //Check for existing email
    User.findOne({email:email})
    .then(user=>
        {
            if(!user) return res.status(400).json({msg:'User does not existi'})

            //Validate passport
            bcrypt.compare(password,user.password)
            .then(isMatch =>{
                if(!isMatch) return res.status(400).json({msg:'Invalid credentials'})
                jwt.sign(
                    {email:user.id},
                    config.get('jwtSecret'),
                    {expiresIn:3600},
                    (err,token)=>
                    {
                        if(err) throw err
                            
                     res.json({
                         token:token,
                         user:{
                        id:user.id,
                        name:user.name,
                        email:user.email
                        }})
                    }
                )
            })
        })
});

router.get('/user',auth,(req,res)=>
{
    User.findOne({id:req.user.id})
    .select('-password')
    .then(user=> res.json(user));
})
module.exports=router;