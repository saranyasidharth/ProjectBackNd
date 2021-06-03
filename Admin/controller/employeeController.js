const {employee, employeeDetails} = require('../models/employee');
const mail = require('../services/mail');
module.exports.get_all_employees = function(req, res){
    employee.find({},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

module.exports.get_employees = function(req,res){
    employee.find({isApproved: false},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

module.exports.update_employee = function(req,res){
    const id = req.params.id;
    employee.findByIdAndUpdate(id, {$set :{isApproved : true}}, {new:true} , function(err,doc){
        if(err){
            res.status(400).json(err);
        }
        else{
            mail.acceptedMailToEmployee(doc.email);
            res.status(201).send(doc);
        }
    })

};

module.exports.delete_employee = function(req,res){
    const id = req.params.id;
    employee.findByIdAndDelete(id, function(err,doc){
        if(err){
            res.status(400).json(err);
        }
        else{
            mail.rejectedMailToEmployee(doc.email);
            res.status(201).send("Document deleted successfully");
        }
    });
    
};


module.exports.count_employees = function(req, res){
    employee.count({isApproved : 'true'}, function(err, result){
        if(err){
            res.status(400).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}
