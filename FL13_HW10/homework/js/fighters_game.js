function Fighter(obj){
	const MAX = obj.hp,
		MIN = 0;
	let name = obj.name,
		damage = obj.damage,
		hp = obj.hp,
		strength = obj.strength,
		agility = obj.agility,
		wins = MIN,
		losses = MIN;

	this.getName = function() {
		return name;
	}
	this.getDamage = function() {
		return damage;
	}
	this.getStrength = function() { 
		return strength;
	}
	this.getAgility = function() {
		return agility;
	}
	this.getHealth = function() {
		return hp;
	}
	this.getWins = function() {
		return wins;
	}
	this.getLosses = function() {
		return losses;
	}
	this.dealDamage = function(decHp) {
		hp - decHp <= MIN ? hp = MIN : hp -= decHp
	}
	this.heal = function(incHp) {
		hp + incHp >= MAX ? hp = MAX : hp += incHp
	}
	this.addWins = function() {
		++wins;
	}
	this.addLosses = function() {
		++losses;
	}

	this.attack = function(defender) {
		this.isAttackSuccessful = function(defender) {
			return Math.random() * 100 >= defender.getStrength() + defender.getAgility();
		}
		if (this.isAttackSuccessful(defender)) {
			defender.dealDamage(this.getDamage())
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`)
		} else {
			console.log(`${this.getName()} attack missed`)
		}
	}

	this.logCombatHistory = function() {
		console.log(`Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLosses()}`)
	}
}

function battle(fighter1,fighter2) {
	if (!fighter1.getHealth() || !fighter2.getHealth()) {
		console.log(`${fighter1.getHealth() ? fighter2.getName() : fighter1.getName()} is dead and can't fight.`)
		return
	}
	while (fighter1.getHealth() && fighter2.getHealth()) {
		fighter1.attack(fighter2);
		if (!fighter2.getHealth()) {
			fighter1.addWins();
			fighter2.addLosses();
			console.log(`${fighter1.getName()} has won!`)
			break
		}
		fighter2.attack(fighter1);
		if (!fighter1.getHealth()) {
			fighter2.addWins();
			fighter1.addLosses();
			console.log(`${fighter2.getName()} has won!`)	
		}	
	}
}