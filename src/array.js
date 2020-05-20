var fruits = ["Orange", "Apple", "Cherry", "Mango", "Watermelon", "Avocado"];
console.log(fruits.length);

console.log(fruits[1]);
fruits[1] = "Strawberry";
console.log(fruits[1]);
console.log(fruits);
console.log(fruits[fruits.length - 1]);

fruits.push("Banana");
console.log(fruits);

fruits.unshift("Grape");
console.log(fruits);

fruits.pop();

fruits.shift();

fruits.forEach(function(fruits) {
  console.log(fruits);
});

for (var fruit of fruits) {
  console.log(fruit);
}

fruits.splice(1, 1);

let map = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(map);

let filter = fruits.filter(function(fruit) {
  return fruit.length > 6;
});
console.log(filter);

let find = fruits.find(fruit => fruit.length > 6);
console.log(find);

let sort = fruits.sort();
console.log(sort);

let users = [
  { name: "name1", age: 15 },
  { name: "name2", age: 40 },
  { name: "name3", age: 38 },
  { name: "name4", age: 50 }
];

let filterUser = users.filter(user => user.age > 30);
console.log(filterUser);

let sortUser = users.sort(function(a, b) {
  return a.age - b.age;
});
console.log(sortUser);
