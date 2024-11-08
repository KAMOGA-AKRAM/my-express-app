const mydb = require('../models/mydb');
//function getting all students
const getstudents =() =>{
    return mydb.students;
}

//this function is getting students by Id

const getstudentbyId = (request) =>{
    for(i = 1; i < 5; i++){
        if(request.params.studentId == mydb[i].id){
            return mydb[i];
        }
        console.log(mydb[i]);
    }
    return 'FOUND NOTHING';
};

module.exports = [getstudents,getstudentbyId];