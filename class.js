class Person{
constructor(name,gender,age){
  this.name = name,
  this.gender=gender,
  this.age =age
  
/*this.greet = function(){
  console.log("Goodday")
} in order to remove this method directly from showing in the object constructor*/

}
greet(){
  console.log("Goodday")
} 
};

let utaina = new Person("Utaina","female",21)
console.log(utaina)

utaina.greet()

//Inheritance between classes, we would use the upper class as the parent class

class employeeId extends Person{
constructor(name,gender,age,empStatus){
  super(name,gender,age)
  this.empStatus = empStatus
}
jobDescription(){
  console.log("Dry cleaning services")
}
}
 let pelumi = new employeeId("Pelumi","male",20,"employed")
 console.log(pelumi)
 pelumi.jobDescription()
