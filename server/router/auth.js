const express = require('express');
const router = express.Router();


require('../db/conn');
const Users = require('../model/UsersSchema')
const Books = require('../model/BooksSchema')

router.get('/', (req, res) => {
    res.send('This is home from router');
})

router.post('/register', async (req, res) => {

    const { username, email, password, userType, DOB} = req.body;

    if (!username || !email || !password) {
        return res.status(422).json({ error: "Please filled the all field" });
    }

    try {
        const userExist = await Users.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exist!" });
        }

        const user = new Users({ username, email, password, userType, DOB });

        const userReg = await user.save();




        if (userReg) {
            res.status(201).json({ messa: "user registered sucessfully" });
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



router.post('/addbooksdata', async (req, res) => {

    const {
        title,
        author,
        publisher,
        stocks,
        ratings
    } = req.body;

    if (!title || !author || !publisher || !stocks || !ratings) {
        return res.status(422).json({ error: "Please filled the all field" });
    }

    try {

        const bookdata = new Books({
            title,
            author,
            publisher,
            stocks,
            ratings
        });

        const bookadd = await bookdata.save();
        if (bookadd) {
            res.status(201).json({ messa: "Book Added sucessfully" });
        }
    } catch (error) {
        console.log(error)
    }


})


router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: 'please fill the data' })
        }

        const userLogin = await Users.findOne({ email: email });
        console.log(userLogin);

        if (!userLogin) {
            res.json({ error: 'Please Signup first!' });
        } else {

            if (password == userLogin.password) {
                res.send(req.body)
                res.json({ message: 'user signing sucessfully!' });
            } else {
                res.json({ error: 'incorrect password' });
            }


        }


    } catch (error) {
        console.log(error);
    }
})





router.get('/getbooksdata', async (req, res) => {

    try {

       const BooksData = await Books.find()

       if (BooksData) {
        res.status(200).json({Books: BooksData})
       } else {
        res.status(500).json({error:"Get dat faikled"})
       }
          
       
        


    } catch (error) {
        console.log(error);
    }
})

module.exports = router;