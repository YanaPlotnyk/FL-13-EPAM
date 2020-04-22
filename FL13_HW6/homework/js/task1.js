let sum = Number(prompt('The amount on your bill:', 100));
sum = Number(sum.toFixed(2));
let tips = Number(prompt('Percentage tip on the bill?', 10));
tips = Number(tips.toFixed(2));

function bill(sum,tips){
	if (isNaN(sum) || sum<0 || tips<0 || tips>100) {
		alert('Invalid input data');
		return false;
	}
	let tipAmount = sum*tips/100;
	let sumTotal = sum + tipAmount;
	alert('Check number: ' + sum 
		+ '\nTip: ' + tips +'%'
		+'\nTip amount: ' + tipAmount.toFixed(2) 
		+'\nTotal sum to pay: ' + sumTotal.toFixed(2))
}

bill(sum,tips);
