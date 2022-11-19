const express = require('express');
const router = express.Router();

require('../db/conn');
const Users = require('../model/UsersSchema')

router.get('/', (req , res)=>{
    res.send('This is home from router');
})

router.post('/register', async (req,res)=>{

    const {username,email,password,userType,DOB,image} = req.body;

    if (!username || !email || !password || !userType || !image) {
        return res.status(422).json({error:"Please filled the all field"});
    }

    try {
        const userExist = await Users.findOne({email: email})

        if(userExist){
            return res.status(422).json({error:"Email already exist!"});
        }

        const user = new Users({username,email,password,userType,DOB,image});

        const userReg = await  user.save();
        if (userReg) {
            res.status(201).json({messa:"user registered sucessfully"});
        }
    } catch (error) {
        console.log(error)
    }

    // Users.findOne({email: email})
    
    // .then((userExist) =>{
       

    //    .then(()=>{
           
    //     }).catch((error)=> res.status(500).json({error:"registration failed"}))
        
    // }).catch((error)=>{});

    // console.log(name);
    // console.log(email);
    // res.json({message:'hello g'});
})

module.exports = router;