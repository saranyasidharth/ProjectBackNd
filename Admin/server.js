const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Importing routes
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoute');

const app = express();

//connect to database
const dbURI = 'mongodb+srv://userone:userone@cluster1.l7ovl.mongodb.net/sesproject?retryWrites=true&w=majority';
mongoose.connect( dbURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify : false});

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/', [authRoutes,employeeRoutes,studentRoutes]);
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "ses",
        description: "API's from admin Microservice",
        contact: {
          name: "sesproject"
        },
        
       server :["http://localhost:2000"],
       
      }
    },
    // ['.routes/*.js']
    apis:  ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 


//Listen to port : default is 2000
const port = process.env.PORT || 2000;
app.listen(port,function(){
    console.log("Listening to port:",port);
})


module.exports = app;