/************IMPORTS*************/ 
const express = require('express');
const mysql = require('mysql2');

/***********FUNCTIONS************/
const app = express();
const port = 8000;

const con = mysql.createPool({
  host:"localhost",
  user: "root",
  password: "Sweetlove",
  database: "newstart",
  port: "3306"
});

 con.query(`INSERT INTO Persons(LastName,FirstName,Address,City)
  VALUES["Dania","Praise","Oda","Akure"]`, function (err, result) {
    if (err) throw err;
    res.send(result);

  });




app.get('/',(req,res)=>{
  res.send("Praise is finally working with express, what a journey it has been")
})

app.get('/',(req,res)=>{
  res.send({
    id:1,
    name:"praise",
    status:"backendDeveloper"
  })
});

app.listen(port,()=>{
  console.log(`app listening at http://localhost:${port}`)
})