// * Make a dogs object with three keys:

const dog = {
  raining: true,
  noise: "woof!",
  makeNoise: function(){
    if (this.raining === true){
      console.log(this.noise)
    }
  }
}

const cat = {
  raining: false,
  noise: "Meow",
  makeNoise: function(){
    if (this.raining === false){
      console.log(this.noise)
    }
  }
}

dog.makeNoise();
cat.makeNoise();

//   * First key called `raining` with a value of `true`.

//   * Second key called `noise` with a value of "Woof!"

//   * Third key called "`makeNoise`" which contains a function that console.logs the noise to the screen if it is raining dogs.

// * Next, make a cats object with three keys:

//   * First key called `raining` with a value of `false`.

//   * Second key called `noise` with a value of "Meow!"

//   * Third key called `makeNoise` which contains a function that `console.logs` the noise to the screen if it is raining cats.

// * Make the dog bark.

// * Make the cat meow.