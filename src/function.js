function add(num1, num2) {
  var sum = num1 + num2;
  // if (typeof sum === "number") {
  //   return sum;
  // } else {
  //   return "sum is NaN";
  // }
  return typeof sum === "number" ? sum : "sum is NaN";
}
console.log(add(2, "10"));

var sum = function(num1, num2) {
  console.log(num1 + num2);
};
sum(3, 3);

var even = [];
function isEven(n1, n2, n3, n4, n5) {
  var n = [n1, n2, n3, n4, n5];
  for (var i of n) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
  return even;
}
isEven(1, 2, 3, 4, 6);
var arr = [2, 4];
console.log(even);
console.log(arr);

function printFood() {
  let food2 = "Suki";
  if (true) {
    var food = "pizza";
    let food2 = "Donut";
    const food3 = "Sushi";
  }
  // console.log(food, food2, food3);
}
printFood();

let name = "Lisa";
let getName = (name = "Anonymous") => {
  console.log(name);
};
getName(name);

let age = 15;
const getAge = (age = 10) => {
  console.log(age);
};
getAge(age);
