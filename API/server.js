const connection = require('../Database/connection');
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('../Database/Database');
const network= require("./NetworkConfig");
const app=express();

let con=new connection.Connection();
let db=new Database.Database();

con.getConnection().connect((err)=>{
    if(err) console.log(err);

    console.log("connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/users/signup/",(req,res)=>{

    //from body part of axios
    const {cnic, gender,password, fullname, dob}=req.body;
    let check= db.insertQuery(`insert into users() values(${cnic},${gender},${fullname},${dob},${password});`);

});


//for login
app.get("/api/users",(req,res)=>{

    //fetching cnic and password

})



//listen port
app.listen(3000,()=>{
    console.log(`port listening on 3000, goto http://${network.address}:3000/api/`);
})