/*object oriented programming*/ 
/**object protype using construction function */

function Person(name,age,height){
this.name= name,
this.age = age,
this.height= height
};

Person.prototype.greet = function (){
console.log(`hello there`)
};

let praise = new Person("Praise",25,6)
console.log(praise)

praise.greet()

function PersonDetail(name,age,height,town,tribe){
  Person.call(this,name,age,height)
this.town = town,
this.tribe = tribe
};

PersonDetail.prototype = Person.prototype

let afeye = new PersonDetail("Afeye",23,8,"Ugboshi","Okapmeri")
console.log(afeye)

//Mini project

function Person1(name,age,state,height,color){
this.name = name,
this.age = age,
this.state = state,
this.height = height,
this.color = color
};

Person1.prototype.talk = function(){
  console.log('Every human being can talk')
};

function User(username,post,access){
  this.username = username,
  this.post = post,
  this.access = access
};

User.prototype = Person1.prototype
let pelumi = new User("Pelumi","staff","login",18);
console.log(pelumi)
pelumi.talk()
