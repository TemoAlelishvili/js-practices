function CoffeeMachine(power, capacity) {
	const pow={
			pow : power,
	};
	Object.defineProperty(pow, 'pow', {
		writable: false
	});
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
  };
  
  this.getPower = function(){
    return pow.pow;
  }
}

var coffeeMachine = new CoffeeMachine(150,300);
console.log(coffeeMachine.getPower())