const LOGINUSER = prompt('Enter your login', 'User');
let passwordUser = "";
const CURRENTTIME = new Date().getHours();

if(LOGINUSER === null || LOGINUSER.trim() === ''){
	alert('Canceled.');
}else if (LOGINUSER.length < 4){
	alert('I don\'t know any users having name length less than 4 symbols');
}else if(LOGINUSER !== 'User' && LOGINUSER !== 'Admin'){
	alert('I don\'t know you');
}else if (LOGINUSER === 'User'){
	passwordUser = prompt('Enter your parrword', 'password');
	if (passwordUser !== 'UserPass') {
		alert('Wrong password');
	} else if(CURRENTTIME < 20 && CURRENTTIME > 8){
		alert('Good day, dear User!');
	} else{
		alert('Good evening, dear User!');
	}
}else if (LOGINUSER === 'Admin'){
	passwordUser = prompt('Enter your parrword', 'password');
	if (passwordUser !== 'RootPass') {
		alert('Wrong password');
	} else if(CURRENTTIME < 20 && CURRENTTIME > 8){
		alert('Good day, dear Admin!');
	} else{
		alert('Good evening, dear Admin!');
	}
}