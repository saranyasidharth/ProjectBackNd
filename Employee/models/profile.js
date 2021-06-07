const mongoose = require('mongoose');
const { isMobilePhone } = require('validator');

const profileSchema = new mongoose.Schema({
    userId:{
        type: String,
        unique:true,
        required: [true,"please enter employeeId"]
    },
    name:{
        type:String,
        lowercase:true,
        unique: true,
        required:[true,"Please enter your name"]
    },
    mobile:{
        type:String,
        required:[true,"Please enter mobile number"],
        unique: true,
        validate:[isMobilePhone,'en-IN',"Enter a valid mobile number"]
    },
    addresses:{
        country:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the country name"]
        },
        city:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the city name"]
        },
        address:{
            type:String,
            lowercase: true,
            required :[true,"Please enter the address"]
        },
        zipcode:{
            type: Number,
            required: [true, "Please enter a zipcode"]
        }
    },
    noOfemp:{
        type:Number,
        default: 0
    }
});


const employeeDetails = mongoose.model('employeedetail',profileSchema);
module.exports = employeeDetails;