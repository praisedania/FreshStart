const { createPool } = require("mysql2")

const pool= createPool({
 host:"localhost",
  user: "root",
  password: "Sweetlove",
  database: "newstart",
  port: "3306"
});

/*pool.query(`SELECT*FROM persons`,(err, result)=>{
  return console.log(result)
}
);*/

pool.query(`INSERT INTO Signup(id,LastName,FirstName,Age)
  VALUES(1,Dania,Praise,25)`,(err,result)=>{
  return console.log(result)
})


 