//set 
let mySet = new Set()
mySet.add(1)
//console.log(mySet)

let username = new Set()
username.add("praise")
username.add("Eshe")
username.add("lola")
username.add("praise")
username.add("sam")

//console.log(username)

function hasFriend(value){
  if(username.has(value)){
    console.log("already exist")
  }else{
    console.log("new user")
  }
}

//hasFriend("sam")
//hasFriend("pelumi")


let user1 ={
  name:"Alice"
}

let user2 ={
  name:"Alex"
}

let user3 ={
  name:"Adam"
}


let weakSet = new WeakSet()

weakSet.add(user1)
weakSet.add(user2)
weakSet.add(user3)

//console.log(weakSet.has(user3))

function isOnline(){
  if(weakSet.has(user1)){
    console.log(true)
  } else{console.log(false)}
};

isOnline("Alice")

let map = new Map()
map.set("praise", "working with map, backend mama")
map.set("Lola", "I hail thee ma")
map.set("Ken", "Is tech not stressing you")



console.log(map)

function getLastMessage(value){
  console.log(map.get(value))
}

//getLastMessage("praise")

/*map.forEach(
  function getLastMessage(value){
  console.log(value)
}
)*/

let weakmap = new WeakMap()

let obj4 = { loginCount:5, lastLogin:"2025-09-11" };

weakmap.set(obj4,0)

console.log(weakmap.get(obj4))









