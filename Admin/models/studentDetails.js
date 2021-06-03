const mongoose = require('mongoose');


//connecting to the students database with admin's credentials
const dbURI = 'mongodb+srv://userone:userone@cluster1.l7ovl.mongodb.net/sesproject?retryWrites=true&w=majority';
const conn= mongoose.createConnection( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

const studentDetails = conn.model('studentdetail',new mongoose.Schema({}));
const student = conn.model('student', new mongoose.Schema({}))




module.exports = {student,  studentDetails};
