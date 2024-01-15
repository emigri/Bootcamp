var numbers = [1, 2, 3, 4]
var emArr = [4,6,12,-2]

//Iterative Methods
numbers.forEach(lessThanThree)
emArr.forEach(lessThanThree)

function lessThanThree(i) {
  if (i < 3) {
    console.log(i.toString() + ' is less than 3');
  } else {
    console.log(i.toString() + ' is NOT less than 3');
  }
}

var numbersDoubled = numbers.map(multiply)
var emDub = emArr.map(multiply)

function multiply(i) {
 return i * 2
}

console.log(numbersDoubled)
console.log(emDub)