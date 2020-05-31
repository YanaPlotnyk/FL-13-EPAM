const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

// Your code goes here
const h1 = document.createElement('h1');
h1.innerHTML = `Manage User App`;
appContainer.append(h1);


const form = document.createElement('form');
let inputName = document.createElement('input');
inputName.setAttribute('placeholder', 'Name');
form.append(inputName);
let inputUsername = document.createElement('input');
inputUsername.setAttribute('placeholder', 'Username');
form.append(inputUsername);
let buttonAdd = document.createElement('button');
buttonAdd.id = 'add-user';
buttonAdd.setAttribute('value','submit');
buttonAdd.innerHTML = 'Add New User';
form.append(buttonAdd);
appContainer.append(form);

const h3 = document.createElement('h3');
h3.innerHTML = 'LOADING...';
h3.hidden = false;
appContainer.append(h3);


function showListUsers(arr) {
	const div = document.createElement('div');
	div.id = 'users-list';
	arr.forEach(obj => {
		const divInner = document.createElement('div');
		let keys = Object.keys(obj);
		keys.forEach(key => {
			if (key === 'id' || key === 'name' || key === 'username') {				
				let input = document.createElement('input');
				input.className = `user-${key}`;
				input.setAttribute('value', obj[key]);
				divInner.append(input);
			}			
		})
		let buttonUpdate = document.createElement('button');
		buttonUpdate.className = 'update-user';
		// buttonUpdate.setAttribute('value','submit');
		buttonUpdate.innerHTML = 'Update';
		let buttonDelete = document.createElement('button');
		buttonDelete.className = 'delete-user';
		// buttonDelete.setAttribute('value','reset');
		buttonDelete.innerHTML = 'Delete';
		divInner.append(buttonUpdate);
		divInner.append(buttonDelete);	
		div.append(divInner);
	})
	appContainer.append(div);
}


const httpRequest = new XMLHttpRequest();
httpRequest.responseType = 'json';

function getList(url) {
	httpRequest.onreadystatechange = function() {
		processingRespose(httpRequest)
	};
	httpRequest.open('GET',`${url}/users` , true);
	httpRequest.send();
}

function processingRespose(httpRequest) {
	if (httpRequest.readyState === 3){
		h3.hidden = false;
	}
	if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				let user = httpRequest.response;
				h3.hidden = true;
				showListUsers(user);

			} else {
				alert('С запросом возникла проблема.');
			}
		}
}
getList(baseUrl);



