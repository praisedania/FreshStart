

let a = NaN;
let b = NaN;
console.log(a==b)
console.log(a===b)
console.log(Object.is(a,b))
console.log(new Set([a,b]))

let c = 0;
let d = -0;
console.log(c==d)
console.log(c===d)
console.log(Object.is(c,d))
console.log(new Set([c,d]))

let e = "42";
let f = 42;
console.log(e==f)
console.log(e===f)
console.log(Object.is(e,f))
console.log(new Set([e,f]))

let g = {};
let h = {};
console.log(g==h)
console.log(g===h)
console.log(Object.is(g,h))
console.log(new Set([g,h]))
