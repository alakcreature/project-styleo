const router = require('express').Router();
const a = require('../models/season-model');
const b = require('../models/figure-model');
const c = require('../models/skin_complexion-model');
const d = require('../models/height-model');
//const mongoose = require('mongoose');

router.post('/', (req,res) => {
    //we have to send response of three questions asked.
    var q1 = a.find({name: req.body.seasonname}).select('name jeans tee').exec();
    var q2 = b.find({name: req.body.figurename}).select('name avoid use optional').exec();
    var q3 = c.find({name: req.body.skinname}).select('name avoid use').exec();
    var q4 = d.find({name: req.body.heightname}).select('name avoid use').exec();

    Promise.all([q1,q2,q3,q4])
    .then((result) => {
        //const response

        res.status(201).json(result);
    })
    .catch((err)=> {
        error: err
    })

});


module.exports = router;
