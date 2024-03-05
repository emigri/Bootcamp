const DigitalPal = function(hungry, sleepy, bored, age, outside, hourCondition) {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.hourCondition = 100;
  }

  const anotherDigitalPal = new DigitalPal(false,true,false,2,false,100);
  console.log(anotherDigitalPal);