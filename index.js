
const express = require('express');
// service import
const my_business_logic = require('./service/my_bussiness_logic'); 
const app = express();
const port = 4000;
app.use(express.json());

// GET 

app.get('/greetings',(request,response) => {
    return response.send({msg: "Hello,AKRAM!"});

});

// List of Friends

let students = [
    {"id": 1,"name":"Gabby"},
    {"id": 2,"name":"Tom"},
    {"id": 3,"name":"Jose"},
    {"id": 4,"name":"Lorna"},
    {"id": 5,"name":"simon"},]


app.get('/list-of-students-by-id',(request, response) => {
    console.log("Logging request params",request.params);
    
});

app.get('/list-of-students-by-id/:id',(request, response) => {
    return response.send(Friends);
});

app.get('/list-of-students-by-id/:StutdentId',(request, response) => {
    // console.log("Logging request params",)
    return response.status(200).send(my_business_logic.getstudentbyId(request));
});

//POST
app.post('/sign-up',(request, response) =>{
      console.log("Logging request params",request.params);
      return response.status(200).send("hey we have signed up!");
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:',port);

});