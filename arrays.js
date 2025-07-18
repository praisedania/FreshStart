/*In JavaScript, an array is an ordered list of values that can store multiple elements of any data type,
 such as strings,numbers, booleans, or even other arrays*/

const strNum = ["praise", 1,] ;
console.log(strNum);

const sN = ["Praise","Talatu"];
console.log(sN)

//Accessing Array Elements
/*const cars = ["Rolex", "rangRover", "raceCar"];
let car = cars[1];
console.log (car);*/

//Changing an Array Element
const cars = ["Rolex", "rangRover", "raceCar"];
cars[1] = "Bens";
console.log (cars)

/*JavaScript Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);*/

/*js at()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(-1);
console.log(fruit);*/

/*js array join()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.join("*");
console.log(fruit)*/

/*js array pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);*/

/*js array push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);*/

/*js array flat()
const myArr = [[1,2],["praise","Talatu"],[5,6]];
const newArr = myArr.flat()
console.log(newArr)*/

/*js array flatMap()
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr)*/

/*js array splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)*/

/*js array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position)*/


/*js array lastIndexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") 
console.log(position)*/

/*js array includes()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 const newfr =fruits.includes("Mango");
console.log(newfr)*/

/*js array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(26);this returns error because array find() works only with function
console.log(first)*/

/*js array sort()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)*/

/*js array reverse()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)*/

/*js array toSorted()
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted)*/

/*js array toReversed()
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed)*/

/*const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  console.log(item);
}*/

/*js array foreach
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
console.log(txt)*/

/*js array map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2)*/

/*js array filter()
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)*/

/*js array every()
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)*/

/*js array some()
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18)*/

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log( Array.isArray(months))
