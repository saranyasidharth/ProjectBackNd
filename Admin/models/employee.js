const mongoose = require('mongoose');
const { isEmail } = require('validator');

//connecting to the employees database with admin's credentials
const dbURI = 'mongodb+srv://userone:userone@cluster1.l7ovl.mongodb.net/sesproject?retryWrites=true&w=majority';
const conn= mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

//creating a employees schema 
const employeeSchmema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true,'Please enter a password'],
        minlength: [8,'Minimum length is 8 characters']
    },
    isApproved:{
        type: Boolean,
        default:'false'
    }
});

const employee = conn.model('employee',employeeSchmema);
const employeeDetails = conn.model('employeedetail', new mongoose.Schema({}))
module.exports = {employee, employeeDetails};