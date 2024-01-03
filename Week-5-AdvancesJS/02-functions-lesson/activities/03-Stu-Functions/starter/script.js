// Write Your Code Below
// One function that adds 1 and 2 together using Function Declaration.

function sum() {
  return 1+2;
}
console.log(sum())

// One function that subtracs 10 from 20 using Function Expression.

var subtract= function(){
  return 20-10
}
console.log(subtract())
// One function that calculates the area of a square using an outside variable, using either function declaration or expression.

var side = 7
function area() {
  return side*side
}

var res = area();
console.log(res)
console.log(area())

// for (let i = res; i > res; i >= 0; i--){
//   console.log(i);
// }

function areaWithinParameters(side){
  return side*side;
}

var res = areaWithinParameters(10);
console.log(res);
var res2 = areaWithinParameters(4);
console.log(res2)

function addParams(x,y){
  return x+y
}

var sum = addParams(1,2);
console.log(sum)

var sum2 = addParams(10,20);
console.log(sum)