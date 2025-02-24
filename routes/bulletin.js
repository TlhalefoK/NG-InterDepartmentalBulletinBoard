const express = require('express')
const router = express.Router();
const Bulletin = require('../models/bulletin')
const checkauth = require("../check-auth")

router.get('', (req, res) => {
    Bulletin.find().then((bulletin)=> {
        res.json(
            {
                message: "Government Bulletins",
                bulletin: bulletin
            }
        );
    })
})


router.post('', checkauth, (req,res) => {
    const bulletin = new Bulletin (
        {
            id: req.body.id,
            title: req.body.title,
            date: req.body.date,
            description: req.body.description
        }
    )
    bulletin.save();
    res.status(201).json({
        message: 'Bulletin Created',
        bulletin:bulletin
    })
})

router.delete(':id', checkauth, (req,res) => {
    Bulletin.deleteOne({_id: req.params.id})
        .then((result)=>
        {
            res.status(200).json({message: "Bulletin Deleted Succesfully"});
        });
})


module.exports = router