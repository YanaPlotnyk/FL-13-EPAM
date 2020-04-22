let word = prompt('Type the word:', 'example');

function getMiddle(word){
	if(word.trim() === ''){
		alert('Invalid value');
		return false;
	}
	let len = word.length;
  
	if (len === 1){
		alert('middle character is: '+ word);
	}
	if (len % 2 === 0) {
		alert('middle characters are: '+ word[len/2-1]+word[len/2]);
	}else {
		alert('middle character is: '+ word[Math.floor(len/2)]);
	} 
}

getMiddle(word);
