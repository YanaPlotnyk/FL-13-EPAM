
const root = document.getElementById('root');

let _books = JSON.parse(localStorage.getItem('books'))

function createBooksDom(container,arr) {
	let section = document.createElement('section');
	section.id = 'section-books';
	arr.forEach((obj,index) => {
		if (index){
			const div = document.createElement('div');
			div.className = 'books';
			let keys = Object.keys(obj);
			keys.forEach(key => {
				if (key === 'title') {
					let h2 = document.createElement('h2');
					h2.innerHTML = obj[key];
					div.append(h2);
				}
				if (key === 'author') {
					let p = document.createElement('p');
					p.innerHTML = obj[key];
					p.className = 'author';
					div.append(p);
				}
			})
			div.id = index;
			const button = document.createElement('button');
			button.className = 'edit-book';
			button.innerHTML = 'Edit';
			div.append(button)
			section.append(div);
		}	
	})
	const button = document.createElement('button');
	button.id = 'add-book';
	button.className = 'books'
	button.innerHTML = 'Add new book';
	section.append(button);
	container.append(section);

	let sectionSecond = document.createElement('section');
	sectionSecond.id = 'action';
	container.append(sectionSecond);
}
createBooksDom(root,_books);

const sectionAction = document.getElementById('action')

function previewBook(container,obj) {
	const div = document.createElement('div');
	div.id = 'preview-book';
	let keys = Object.keys(obj);
	keys.forEach(key => {
		if (key === 'image') {				
			let img = document.createElement('img');
			img.src = obj[key]; 
			div.append(img);
		}
		if (key === 'title') {
			let h2 = document.createElement('h2');
			h2.innerHTML = obj[key];
			div.append(h2);
		}
		if (key === 'author') {
			let p = document.createElement('p');
			p.innerHTML = obj[key];
			p.className = 'author';
			div.append(p);
		}
		if (key === 'anotation') {
			let p = document.createElement('p');
			p.innerHTML = obj[key];
			p.className = 'anotation';
			div.append(p);
		}
	})
	container.append(div);
}

function createFormElement(element,labelInner,value,required) {
	let div = document.createElement('div');
	let label = document.createElement('label');
	label.innerHTML = labelInner;			
	let input = document.createElement(element);
	input.required = required;
	input.setAttribute('value', value); 
	if (element === 'textarea') {
		input.innerHTML = value;
	}
	if (labelInner === 'image') {
		input.setAttribute('type','url');
	}
	let br = document.createElement('br')
	div.append(label);
	div.append(input);
	div.append(br);
	return div
}

function editBook(container,obj) {
	const form = document.createElement('form');
	let keys = Object.keys(obj);
	keys.forEach(key => {
		if (key === 'image') {	
			let div = createFormElement('input',`${key}: `,obj[key],true)
			form.append(div);
		}
		if (key === 'title') {
			let div = createFormElement('input',`${key}: `,obj[key],true)
			form.append(div);
		}
		if (key === 'author') {
			let div = createFormElement('input',`${key}: `,obj[key],true)
			form.append(div);
		}
		if (key === 'anotation') {
			let div = createFormElement('textarea',`${key}: `,obj[key],true)
			form.append(div);
		}
	})
	let buttonSave = document.createElement('button');
	buttonSave.id = 'save-book';
	buttonSave.setAttribute('value','submit');
	buttonSave.innerHTML = 'Save';
	let buttonCancel = document.createElement('button');
	buttonCancel.id = 'cancel-book';
	buttonCancel.setAttribute('value','reset');
	buttonCancel.innerHTML = 'cancel';
	form.append(buttonCancel);
	form.append(buttonSave);
	container.append(form);
	return container
}

const regexpUrlId = new RegExp(/=([\s\S]+?)#/g);
const booksAll = document.querySelectorAll('.books');
const editButtons = document.querySelectorAll('.edit-book');
const addButton = document.getElementById('add-book');


for (let i = 0; i < booksAll.length; i++) {
    booksAll[i].addEventListener('click', event => {
		let id = event.target.closest('div').id;
		location.href = location.host+location.pathname+`?id=${id}#preview`;	
		event.preventDefault();	
	})	
}
for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', event => {
		event.stopPropagation();
		let id = event.target.closest('div').id;
		event.preventDefault();	
		location.href = location.host+location.pathname+`?id=${id}#edit`;	
	})	
}
addButton.addEventListener('click', event => {
    event.stopPropagation();
    location.href = location.host+location.pathname+`?id=0#add`;
	updateRightSection(0);	
})	

if (location.search) {
	let id = regexpUrlId.exec(location.href);
	updateRightSection(id[1])
}

function updateRightSection(id) {
	if (location.hash === '#preview') {
		previewBook(sectionAction,_books[id]);
	} 
	if (location.hash === '#edit') {
		editBook(sectionAction,_books[id]);
	} 
	if (location.hash === '#add') {
		editBook(sectionAction,_books[id]);
	} 
}

