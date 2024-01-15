console.log(this);

function helloThis() {
  console.log('Inside this function, this is ' + this);
} //this will return the window object

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },// this will point to the child object and use the age property
  // child.ageTenyears();
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this)
      console.log(this.initialInvestment * 1.15); // this will point to the investment object and use the initial investment property
    function extraFunction(){
    console.log(this)
}
    console.log("extra function");
    extraFunction()
    },
  },
};
