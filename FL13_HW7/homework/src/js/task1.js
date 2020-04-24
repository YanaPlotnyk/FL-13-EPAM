let loginUser = prompt('Enter your login', 'User');
let passwordUser = "";
let currentTime = new Date().getHours();

if(loginUser === null || loginUser.trim() === ''){
	alert('Canceled.');
}else if (loginUser.length < 4){
	alert('I don\'t know any users having name length less than 4 symbols');
}else if(loginUser !== 'User' && loginUser !== 'Admin'){
	alert('I don\'t know you');
}else if (loginUser === 'User'){
	passwordUser = prompt('Enter your parrword', 'password');
	if (passwordUser !== 'UserPass') {
		alert('Wrong password');
	} else if(currentTime < 20){
		alert('Good day, dear User!');
	} else{
		alert('Good evening, dear User!');
	}
}else if (loginUser === 'Admin'){
	passwordUser = prompt('Enter your parrword', 'password');
	if (passwordUser !== 'RootPass') {
		alert('Wrong password');
	} else if(currentTime < 20){
		alert('Good day, dear Admin!');
	} else{
		alert('Good evening, dear Admin!');
	}
}
