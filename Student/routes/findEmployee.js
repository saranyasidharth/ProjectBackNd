const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const { employeeDetails } = require('../models/readonlydata');
const router = Router();

router.get('/findEmployee',  requireAuth ,  function(req,res){
    employeeDetails.find({}, function(err, result){
        if(err){
            console.log(err)
            res.status(401).send(err);
        } else {
            res.status(200).send(result);
        }
    })
});

module.exports =router;