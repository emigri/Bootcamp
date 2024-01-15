var numbers = [2, 4, 6, 8, 10, 12];

var planets = [
  {
      name: 'Earth',
      moons: 1
  },
  {
      name: 'Mars',
      moons: 2
  },
  {
      name: 'Jupiter',
      moons: 79
  },
  {
      name: 'Saturn',
      moons: 82
  }
];

// Filtering Methods

// Find
console.log(numbers.find(function(i) {
  return i > 10
}))

console.log(planets.find(function(i) {
  return i.moons > 10
}))

// Filter
console.log(numbers.filter(function(i){
  return i >= 10
}))

console.log(planets.filter(function(i) {
  return i.moons > 10
}))

console.log(planets.filter(function(i){
  return i.name === "Pluto"
}))

// Create an array of account objects that have a firstName, lastName, and a balance

var Accounts = [
  {
  firstName: "Emily",
  lastName: "Grivot",
  balance: 25000,
},
{
  firstName: "Joe",
  lastName: "Paul",
  balance: 25000,
}
]

console.log()

// Use the find method to search through the array and print the first account with a balance equal to $250,000, and print it to the console.

// Use the filter method to create a new array of only Users with a last name that begins with the same letter, and print it to the console.
