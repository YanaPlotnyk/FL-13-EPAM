let start = confirm('Do you want to play a game?');
let maxPrize = 100;
let totalPrize = 0;
let newStart = false;
let max = 5;

if (!start) {
	alert('You did not become a billionaire, but can.');
}

while (start){
	let randomNumber = Math.floor(Math.random() * (max+1));
	let i = 3;
	let prize = maxPrize;	
	while (i>0) {	
		let guessNumder = prompt('Guess a number from 0 to ' + max 
			+ '\nAttempt left: ' + i
			+ '\nTotal prize: ' + totalPrize + '$'
			+ '\nPossible prize on current attempt: ' + prize + '$');
		if(guessNumder === null || guessNumder.trim() === ''){
			start = false;
			break;
		}
		if (Number(guessNumder) !== randomNumber){
			prize /= 2;
		}else{
			totalPrize += prize;
			maxPrize *= 2;
			max *= 2;
			alert('Congratulation, you won! Your prize is: ' + totalPrize + '$');
			start = confirm('Do you want to continue?');
			console.log(start);
			break;		
		}
		i--;
		start = false;
	}
	if(!start){
		alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
		start = confirm('Do you want to play one more time?');
		maxPrize = 100;
		totalPrize = 0;
		max = 5;
	}
}