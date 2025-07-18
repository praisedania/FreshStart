/*function declaration
function trial() {
console.log("hi")
console.log("hello")
};

trial();*/

/* local variable
function testing(){
let answer = 2 
console.log(answer)
};
testing();*/

// global variable
let globalVariable = "is a number"

function testing(){
let answer = 2
console.log(answer, globalVariable)
};
testing();

// function expression
let funExpression= function(){
console.log("working")
};

funExpression();

//invoking a function before declaring it
trial();
function trial() {
console.log("hi")
console.log("hello")
};

// function parameters and arguments
/*function favouriteFood(food){
console.log(`my favorite food is ${food}`)
};

favouriteFood("Friedrice");
favouriteFood("Eba");
favouriteFood("beans");*/

function favouriteFood(name,food){
console.log(`${name} favorite food is ${food}`)
};

favouriteFood("praise","Friedrice");
favouriteFood("Janet","Eba");
favouriteFood("afeye","beans");

//default parameters

function funcFood( name = "praise",food="rice"){
console.log(`${name} favorite food is ${food}`)
};
funcFood();

//return keyword
function passCode(code){
return `successful ${code}`
}
console.log(passCode(1))

let login = function(password){
if (password==="t123"){
  return "successfully logged in"
}else{
  return "password is incorrect"
}
};
let result = login("t123");
console.log(result);

function colours(...colours){
console.log(colours[1])
};
colours("red","green","black","yellow");

//arrow function
const arrowFunc=()=>{
 console.log(2+2)
};
arrowFunc();


const arrowFunc1=(a,b)=>{
 console.log(a+b)
};
arrowFunc1(1,1);

const arrowFunc2=string=>{
 console.log(`hey ${string}`)
};
arrowFunc2("there");

const arrowFunc3=()=>"hey" ;

console.log(arrowFunc3())


//setTimeout
function timeOutTest(firstName){
  console.log(`my name is ${firstName}`)
};
setTimeout(timeOutTest,3000,"praise D");

/*setInterval
function intervalTest(firstName){
   console.log(`my name is ${firstName}`)
};
setInterval(intervalTest,2000, "Eshe");*/

function myFunction(back) {
  console.log('hello world');
  back();
}

function callback() {
  console.log('printing something new!');
}

myFunction(callback);

 

  

