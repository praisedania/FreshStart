/* Array loop -is a programming structure that allows code to be executed repeatedly based on a condition 
Types of loop
1. for loop
2. while loop
3. do while loop*/

//for loop
//example 1
for (let i = 0; i <= 2; i=i+1){
    console.log (i)
}
//example 2
const hairEquip = ["comb", "spray bottle","conditional"];
for( let i = 0; i<= hairEquip.length-1; i++){
    const equip = hairEquip[i]
    console.log(equip)

}


// while loop
//example1
let i = 0 //loop variable

while(i <= 2 /*loop condition*/){
    console.log(i) // loop body
    i = i + 1; //increment
}



// do while loop
//example

// for in loop - this mainly used to iterate over objects, its not reeally good for iterating over an 
// array
//example
const house = { type: "detached", build:"brick", year: 2019, price:250000, driveway:true}

for (let property in house){
    console.log(`${property}:${house[property]}`)

}

// for of loop - used to iterate over array
// example
let colours = ["red","orange","yellow","green","blue"];

/*for ( let x of colours){
    console.log(x)
}*/

for (let x of colours){
    if(x ==="green"){
break
    }else{
        console.log(x)
    }
}


//practice
const nums = [10,20,30];
nums[2]= 99;
console.log(nums)

let mph = 0;
while (mph <= 100){
    console .log(`the speed of the car is${mph} MPH `)
    mph +=10

}

const car = {type:"volve", price:500}
//console.log(car)
for ( let y in car){
    console.log(`${car[y]}`)

};

//while
const children=["omo","eshe","afeye"]
       let index = 0 
       
       while(index<children.length-1){
       console.log(children[index])
       index++
       }

       //do while
 let m = 0
 do{
    console.log( `lets see how we understand ${m}`)
    m++
 }
 while(m<3);

 // for in loop - 
  const house1={
    type:"detached",
    build:"brick",
    year:2019,
    price:250000,
    driveway:true
 };
 

 for(let x in house1){
    console.log(`${x}:${house1[x]}`)
 }

 //for of loop -
 const colours1 =[
  "red",
  "green",
  "blue",
  "orange"
 ];

 for (let x of colours1){
  console.log(x)
 }

 //Iteration
 //foreach
 const fruits =["apple","bannana","orange"]
 fruits.forEach(
    function test1(value,index,array){
        console.log(`${index} ${value}`)
    }
 );

 //map()
 const fruits1 =["apple","bannana","orange"]
function test2(value){
return value.toUpperCase()
}

let answer = fruits1.map(test2)
console.log(answer)

//filter()

let number =[1,2,3,4,6,7,8,9,10];
let evenNumber=number.filter(
function test3(value,index,array){
return value % 2 ===0
}
);
console.log(evenNumber)

// reduce

let number1 =[1,2,3,4,5,6,7,8,9,10];
let reduceNumber=number1.reduce(
function test3(Total,value,index,array){
return Total+value 
}
);
console.log(reduceNumber)

//some()
let number2 =[1,2,3,4,5,6,7,8,9,10];
let numSome=number2.some(
function test3(value,index,array){
return value > 9
}
);
console.log(numSome)

//every()
let number3 =[1,2,3,4,5,6,7,8,9,10];
let numSome1=number3.every(
function test3(value,index,array){
return value > 9
}
);
console.log(numSome1)

//find()
const fruits2 =["apple","bannana","orange"]
 let findAnswer=fruits2.find(
    function test1(value,index,array){
        return value === "apple"
    }
 );
 console.log(findAnswer)

 //findIndex
 const fruits4 =["apple","bannana","orange"]
 let findAnswer1=fruits4.findIndex(
    function test1(index){
        return index== "apple"
    }
 );
 console.log(findAnswer1)

 //break
 const trial = [1,2,3,4,5];
 for(let i = 0;i< trial.length;i++){
    if(i===3){
        break;
    }
    console.log(i)
 }


 let randomN = ["praise", "talatu","afeye","kadijah"]
 let ik = 0
 while(ik<randomN.length){
    if(randomN[ik]==="afeye"){
        break;
    }
    console.log(randomN[ik])
    ik++
    
 }

 //continue


const trial1 = [1,2,3,4,5];
 for(let i1 = 0;i1< trial1.length;i1++){
    if(i1===3){
        continue;
    }
    console.log(i1)
 }

 

 





    