const mongoose = require('mongoose');

//Connect to admin db to read data
const admin="mongodb+srv://userone:userone@cluster1.l7ovl.mongodb.net/sesproject?retryWrites=true&w=majority";
const conn = mongoose.createConnection( admin,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const employee="mongodb+srv://userone:userone@cluster1.l7ovl.mongodb.net/sesproject?retryWrites=true&w=majority";
const employeeconn = mongoose.createConnection( employee,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});



//from employee details collection
const employeeDetails = employeeconn.model('employeedetail',new mongoose.Schema({}))

module.exports = { employeeDetails};