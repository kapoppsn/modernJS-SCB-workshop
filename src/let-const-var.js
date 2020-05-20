var a = 0;
if (true) {
  var a = 5;
}
console.log(a);
// var is global scope

let b = 0;
if (true) {
  let b = 5;
  console.log("block b : " + b);
}
console.log(b);

const c = 0;
if (true) {
  const c = 5;
  console.log("block c : " + c);
}
console.log(c);
// let and const is block scope

var d;
d = 5;
console.log(d);

let e;
e = 5;
console.log(e);

const f = 5;
console.log(f);
// const cannot re-assign after like let and var(have to assign at first)

var g = 0;
function add() {
  g++;
  console.log("g in function = " + g);
}
add();
add();
console.log("g out = " + g);

var h = 5;
function minus() {
  var h = 5;
  h--;
}
minus();
console.log(h);
// var, let, const is function scope
