var food = {
  name: "Pizza",
  price: 399,
  calrolies: 350,
  getPrice: function() {
    return this.name + " Price is " + this.price;
  }
};

console.log(food.name);
console.log(food["price"]);
console.log(food.getPrice());
