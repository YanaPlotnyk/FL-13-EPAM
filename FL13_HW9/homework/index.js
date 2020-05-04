function converter(){
	const STRING = 'string';
	let resultArr = [];
	for (let i = 0; i < arguments.length; i++){
		let type = typeof arguments[i];
		type === STRING ? resultArr.push(Number(arguments[i])) : resultArr.push(String(arguments[i]))
	}
	return resultArr
}


function executeForEach(arr,newFunction){
	for (let i = 0; i < arr.length; i++){
		newFunction(arr[i]);
	}
}


function mapArray(arr,newFunction){
	let resultArr = [];
	executeForEach(arr, (el) => {
		resultArr.push(newFunction(Number(el)));
	});
	return resultArr;
}


function filterArray(arr, newFunction){
	let resultArr = [];
	executeForEach(arr, (el) => {
		if (newFunction(el)){
			resultArr.push(el);
		}
	});
	return resultArr;
}


function containsValue(arr, num){
	let result = false
	executeForEach(arr, (el) => {
		el === num ? result = true : result
	});
	return result;
}


function flipOver(stroke) {
    let result = '';
    executeForEach(stroke, el => {
        result = el + result;
    });
    return result;
}


function makeListFromRange(arr){
	let start = 0, end = 0;
	let resultArr = [];
	arr[0] <= arr[1] ? (start = arr[0], end = arr[1]) : (start = arr[1], end = arr[0]);
	for (let i = start; i <= end; i++){
		resultArr.push(i);
	}
	return resultArr;
}


function getArrayOfKeys(arr, key){
	let resultArr = [];
	executeForEach(arr, (el) => {
		el.hasOwnProperty(key) ? resultArr.push(el[key]) : resultArr
	});
	return resultArr;
}


function substitute(arr,symbol){
	let resultArr = [],
		min = 10,
		max = 20;
	mapArray(arr, (el) => {
		el > min && el < max ? resultArr.push(symbol) : resultArr.push(el)
	})
	return resultArr;
}


function getPastDay(date,daysBefore){
	const MILLISECONDSPERDAY = 86400000;
	const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	date = new Date(Date.parse(date) - daysBefore * MILLISECONDSPERDAY);
	return `${date.getDate()}, (${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()})`;
}


function formatDate(date){
	const CHECK = 10;
	let hours = date.getHours() < CHECK ? '0' + date.getHours() : date.getHours(),
		minutes = date.getMinutes() < CHECK ? '0' + date.getMinutes() : date.getMinutes(),
		day = date.getDate() < CHECK ? '0' + date.getDate() : date.getDate(),
		months = date.getMonth() < CHECK - 1 ? '0' +(date.getMonth() + 1) : date.getMonth() + 1;
	return `${date.getFullYear()}/${months}/${day} ${hours}:${minutes}`
}















