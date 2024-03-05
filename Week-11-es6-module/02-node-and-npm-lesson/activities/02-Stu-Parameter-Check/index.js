// // returns an array of command line arguments

const firstInput = process.argv[2];
const secondInput = process.argv[3];

console.log(firstInput);
console.log(secondInput);

if (process.argv[2] === process.argv[3]){
  console.log(true);
} else {
  console.log(false);
}


