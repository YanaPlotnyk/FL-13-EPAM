function Vehicle(color, engine){
	this.color = color;
	this.engine = engine;
	this.maxSpeed = 70;
	this.model = `unknown model`;

	this.stopped = true;
	this.speed = 0;
	this.maxDriveSpeed = 0;
	this.driveTime;
	this.stopTime;

}
Vehicle.prototype.getInfo = function() {
	let obj = {};
	Object.keys(this).forEach(key => {
		if (key === 'color' || key === 'engine' || key === 'maxSpeed' || key === 'model') {
			obj[key] = this[key];
		}
	})
	return obj;
}
Vehicle.prototype.driveInfo = function() {
	console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxDriveSpeed}`);
}
Vehicle.prototype.upgradeEngine = function(newEngine, maxSpeed) {
	if (this.stopped) {
		this.engine = newEngine;
		this.maxSpeed = maxSpeed;
	}
}
Vehicle.prototype.drive = function() {
	if (this.stopped) {
		if (this instanceof Motorcycle ) {
			this.startDrive();
		}
		this.stopped = false;
		clearInterval(this.stopTime);
		this.driveTime = setInterval(() => {
			this.speed += 20;
			this.maxDriveSpeed = this.speed;
			if (this.speed > this.maxSpeed) {
				console.log(this.speed);
				console.log(`speed is too high, SLOW DOWN!`);			

				if (this.speed >= this.maxSpeed + 30 && this instanceof Motorcycle) {
					console.log(`Engine overheating`);
					this.stop();					
				}
			} else {
				console.log(this.speed);
			}
		}, 2000);
	} else {
		console.log(`Alrady driving`); 
	} 	
}
Vehicle.prototype.stop = function() {
	if (!this.stopped) {
		this.stopped = true;
		clearInterval(this.driveTime);
		this.stopTime = setInterval(() => {
			this.speed -= 20;
			if (this.speed <= 0) {
				clearInterval(this.stopTime);
				return this.driveInfo();		
			} 
			console.log(this.speed);
		}, 1500);
	} else if (this.speed !== 0) {
		console.log(`Already slows down`); 
	} 	
}


function Car(model, color, engine){
	Vehicle.call(this, color, engine);
	this.model = model;
	this.maxSpeed = 80;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.driveInfo = function() {
	console.log(`Car ${this.model} is stopped. Maximum speed during the drive was ${this.maxDriveSpeed}`);
}
Car.prototype.changeColor = function(newColor) {
	this.color === newColor ? console.log(`The selected color is the same as previous,\
	please choose another one`) : this.color = newColor;
}


function Motorcycle(model, color, engine){
	Vehicle.call(this, color, engine);
	this.model = model;
	this.maxSpeed = 90;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.driveInfo = function() {
	console.log(`Motorcycle ${this.model} is stopped. Good drive`);
}
Motorcycle.prototype.startDrive = function() {
	console.log(`Let's drive`);
}
