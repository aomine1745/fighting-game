class Player {
	constructor(name, health, power){
		this.name = name;
		this.health = health;
		this.power = power;
	}
	isAlive(){
		return this.health > 0; 
	}
	hit(opponent){
		opponent.health -= this.power;
	}
	to_s(){
		return `${this.name}: Health: ${this.health}, Power: ${this.power}`;
	}
}

function fight(p1, p2){
	var round = 1;
	while(p1.isAlive() && p2.isAlive()){
		console.log('Round ' + round++);
		p1.hit(p2);
		p2.hit(p1);
		show_info(p1, p2);
		console.log('----------------------------------------');
	}

	if(p1.isAlive()){
		console.log(p1.name + ' WON!');
	}else if(p2.isAlive()){
		console.log(p2.name + ' WON!');
	}else {
		console.log('TIE!');
	}
}

function show_info(arr){
	for(e of arguments){
		console.log(e.to_s());
	}
}

console.log('PLAYERS INFO');
var p1 = new Player('player 1', random(100), random(20));
var p2 = new Player('player 2', random(100), random(20));
show_info(p1, p2);

console.log('LETS FIGHT!');
fight(p1, p2);

function random(value){
	var resultado = Math.floor((Math.random() * value) + 1);
	return resultado;
}
function randomRange(min, max){
	var resultado = Math.floor(Math.random()*(max - min + 1) + min);
	return resultado;
}