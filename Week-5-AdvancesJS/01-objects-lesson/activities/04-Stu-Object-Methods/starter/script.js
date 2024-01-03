//WRITE YOUR CODE BELOW
var menu = {
  coffee: 1,
  tea: 2,
  hotChocolate: 3, 
}

console.log(Object.keys(menu))

var prices = Object.values(menu) // creates array of just prices
console.log(prices)

var totalPrice = 0
for (var i = 0; i < prices.length; i++) {
  totalPrice += prices[i];
}

console.log(totalPrice)