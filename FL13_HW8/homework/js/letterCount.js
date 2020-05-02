function letterCount(string, letter){
	let count = 0;
	let arr = string.toLowerCase().split("");
	arr.forEach(function(item){
		item === letter ? count++ : count
	})
	return count;
}
console.log(letterCount('upstairs','s'));