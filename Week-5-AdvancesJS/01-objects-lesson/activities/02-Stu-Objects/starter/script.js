//WRITE YOUR CODE BELOW

var customerOrder = {
  name:"Tea",
  numSugar: [1, 2, 3, 4, 5],
  isReady: true,
};

console.log(customerOrder.name);
console.log(customerOrder.numSugar[1] + " sugars");

if (customerOrder.isReady === true) {
  console.log("Ready for pick-up")
} else {
  console.log("Still in order queue")
}

