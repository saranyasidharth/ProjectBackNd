const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const {student} = require('../models/studentDetails');
const router = Router();

router.get('/studentsCount', requireAuth ,function(req,res){
    student.count({},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(doc);
        }
    })
});

module.exports = router;