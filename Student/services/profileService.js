const createPostObject = function(req, files){
    
    console.log(req);
    var name = req.name;
    var mobile = req.mobile;
    var courses = [];
    var addresses =[];
    req.courses.forEach(course => {
        files.forEach(file => {
            courses.push({
                courseName  : course.courseName,
                courseModel : course.courseModel,
                courseImage : file.path 
            })
        });  
    });
    req.addresses.forEach(element => {
        addresses.push({
            houseDetails : element.houseDetails,
            city : element.city,
            state : element.state,
            zipcode : element.zipcode 
        })
    }); 
    
    return details = {
        name,
        mobile,
        courses,
        addresses
    }
    
}


module.exports = { createPostObject };