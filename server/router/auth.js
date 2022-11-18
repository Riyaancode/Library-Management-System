const express = require('express');
const router = express.Router();

require('../db/conn');
const Users = require('../model/UsersSchema')

router.get('/', (req , res)=>{
    res.send('This is home from router');
})

router.post('/register', (req,res)=>{

    const {name,email, pass} = req.body;

    if (!name || !email || !pass) {
        return res.status(422).json({error:"Please filled the all field"});
    }

    Users.findOne({email: email}).then((userExist) =>{
        if(userExist){
            return res.status(422).json({error:"Email already exist!"});
        }

        const user = new Users({name,email,pass});

        user.save().then(()=>{
            res.status(201).json({messa:"user registered sucessfully"});
        }).catch((error)=> res.status(500).json({error:"registration failed"}))
        
    }).catch((error)=>{console.log(error)});

    // console.log(name);
    // console.log(email);
    // res.json({message:'hello g'});
})

module.exports = router;