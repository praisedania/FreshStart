//setTimeout
/*setTimeout(function() {
  console.log('This message is displayed after 2 seconds');
}, 2000); */


function testTimeout(){
  console.log("It is working o")
};

//setTimeout(testTimeout,5000)

const loggedInUser = 'John';
function greet(userName) {
    console.log('Welcome ' + userName + '!');
}
//setTimeout(greet, 2000, loggedInUser);  

//setInterval
function greet() {
  console.log('Hello world');
}
//setInterval(greet, 1000);   

//callbacks

function Func(name,callback){
console.log("first display")
callback()
};

function callbackFun(){
  console.log("second display")
};

//Func("Praise",callbackFun)

//callback hell
/*setTimeout(function(){
  console.log("first function")
  setTimeout(function(){
    console.log("second function")
    setTimeout(function(){
      console.log("third function")
      setTimeout(function(){
      console.log("fourth function")
      setTimeout(function(){
      console.log("fifth function")
    },1000)
    },2000)
    },3000)
  },4000)
}, 5000)*/

//promises
let promise = new Promise(function(resolve,reject){
let x = 50
if(x >=13){
  resolve("correct")
}else{
  reject("not correct")
}
})
console.log(promise)


//async/await

async function checking(params) {
 let x= Math.random() * (10 - 5) + 5
 let y = 1000
 console.log(y*x)
}

checking()
