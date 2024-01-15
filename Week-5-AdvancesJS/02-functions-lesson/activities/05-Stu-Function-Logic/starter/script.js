// Write Your Code Below

// Create a function using function declaration that checks if two parameters are equal in both value and type, just value, or not equal in any way and prints it to the console.

function compare (x,y){
  if (x===y){
    console.log(x + " and " + y + "are equal in type and value")
  } else if (x==y){
    console.log(x + " and " + y + " are equal in type and value")
  } else {
    console.log(`${x} and ${y} are not equal`)
  }

}

// Call the function so that it prints each option.

// Create a function using function expression that iterates through an array and checks if each index is less than 10 and prints if it is or isn't.

var printLessThan10=function(arr){
  for (var i = 0; i < arr.length; i++) {
      if(arr[i]<10){
          console.log(`${arr[i]} is less than 10`)
      } else{
          console.log(`${arr[i]} is greater than or equal to 10`)
      }
      
  }
}

printLessThan10([1,20,12,4])

// Call the function.