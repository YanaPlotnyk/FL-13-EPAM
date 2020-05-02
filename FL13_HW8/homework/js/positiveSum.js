function positiveSum(arr){
	let sum = 0;
	arr.forEach(function(eachElement){
		eachElement > 0 ? sum += eachElement : sum
	})
	return sum;
}
console.log(positiveSum([0,-3,5,7]));