/*function multiplicationTable(){
const wholen= [1,2,3,4,5,6,7,9,10,11,12]
for(let i = 1; i <= wholen.length;i++){
  console.log(i*2)
}
};
multiplicationTable()
*/

function mt(num) {
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};
//mt(2)

function Person (name, age,interest){
this.name = "praise",
this.age = 25,
this.interest = "Backend"
};
 
const me = new Person()
//console.log(me)

const book ={
  tittle: "code writing",
  author: "Praise"
};

function info(yearOfRelease){
console.log(`${this.tittle} was written by ${this.author} and was realeased in ${yearOfRelease}`)
};

//info.call(book)
//info.apply(book,["2025"])

const bind = info.bind(book,[2025])
bind()


/**exercise 2 **/

function Animal (name){
  this.name
};

Animal.prototype.speak = function(){
  console.log(`can speak`)
};

let test = new Animal()
//test.speak()

function Dog(name){
  Animal.call(this,name)
// this.speak= function(){
//  console.log(`woof`)
// }
this.bark = function(){
  console.log(`bark lets see`)
}
}

Dog.prototype = Animal.prototype

let test2 = new Dog()
//test2.speak()
//test2.bark()


/*******EXERCISE ON SET AND MAP**********/

let arr1 =[1,2,3,4];
let arr2 =[3,4,5,6];
 
let uniValues = new Set([...arr1,...arr2])
console.log(uniValues);

let uniArr = [...uniValues]
console.log(uniArr);


