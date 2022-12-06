const connection = require('../Database/connection');
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('../Database/Database');
const network= require("./NetworkConfig");
const app=express();

let con=new connection.Connection().getConnection();
let db=new Database.Database();

con.getConnection().connect((err)=>{
    if(err) console.log(err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/users/signup/",(req,res)=>{

    //from body part of axios
    const {cnic, gender,password, fullname, dob}=req.body;
    let check= db.insertQuery(`insert into users() values(${cnic},${gender},${fullname},${dob},${password});`);

});


//for login
app.get("/api/users/:cnic/:password",(req,res)=>{

    //fetching cnic and password
    const {cnic, password} = req.params;
    // let data= db.selectQuery(`select u_name,password from user where u_name='${cnic}' and password='${password}'`, req,res);
    con
      .query(`select u_name,password from user where u_name='${cnic}' and password='${password}'`,(err,rows,fields)=>{
        if (err) console.log(err);
        res.send(rows);
      });
});

//listen port
app.listen(3000,()=>{
    console.log(`port listening on 3000, goto http://${network.address}:3000/api/`);
})