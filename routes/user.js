const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', (req,res) => {
    bcrypt.hash(req.body.password,10)
    .then(hash => {
        const user = new User (
            {
                username: req.body.username,
                password: hash
            }
        )
        user.save()
        .then(result => {
            res.status(201).json({
                message: 'User Created',
                user:user
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error Creating User',
                error:err
            })
        })
    })
})

router.post('/login', (req,res) => {
    let fetchedUser;
    User.findOne({username:req.body.username})
    .then(user=>{
        if (!user) {
            return res.status(401).json({ message: "Authentication Failure User Not Found" }); // USER NOT FOUND
        }
        fetchedUser = user; 
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
        if(!result)
        {
            return res.status(401).json({ message: "Authentication Failure Incorrect Password" }); // INCORRECT PASSWORD
        }

        const token = jwt.sign({username:fetchedUser.username,userid:fetchedUser._id},
            'secret_this_should_be_longer_than_it_is',
            {expiresIn:'1h'});
        
        res.status(200).json({token:token}); 
    })
    .catch(err => {
        return res.status(401).json({ message:"Authentication Failure Server Error" }); // SERVER ERROR
    })
})


module.exports = router