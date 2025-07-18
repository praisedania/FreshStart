/*variable declaration keywords, javaScript variable declaration keyword are case sensitive e.g var, const, let
when written as VAR, CONST, LET when used will return an error saying unexpected identifier*/

var x = 2;
const y = 3;
let num = 4;
console.log(x)
console.log(y)
console.log(num)

/*js hoisting, this occurs when a variable is assigned or used before declaring it.*/
vt = 6;
var vt;
console.log(vt)
/*ps JavaScript has a default behavior of moving all declarations to the top of the current scope,
the let and const keyword will return an error,saying cannot access it before initilization or reference error
 so it's best you declare a variable before actually using it e.g
lt = 7;
let lt;
console.log(lt)
ct = 8;
const ct ;
console.log(ct)*/

//js string, in strings the values are usually written inside quotes, either single, double, template(backtick)
const color = "white";
console.log(color)

/*undefined, variables declared without assigning value to it or without initialization returns undefined,
typeOf is also undefined, e.g*/
let ud;
console.log(ud)