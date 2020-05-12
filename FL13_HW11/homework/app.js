const data = [
	{
		'folder': true,
		'title': 'Pictures',
		'children': [
		{
			'title': 'logo.png'
		},
		{
			'folder': true,
			'title': 'Vacations',
			'children': [
			{
				'title': 'spain.jpeg'
			}
			]
		}
		]
	},
	{
		'folder': true,
		'title': 'Desktop',
		'children': [
		{
			'folder': true,
			'title': 'screenshots',
			'children': null
		}
	]
	},
	{
		'folder': true,
		'title': 'Downloads',
		'children': [
		{
			'folder': true,
			'title': 'JS',
			'children': null
		},
		{
			'title': 'nvm-setup.exe'
		},
		{
			'title': 'node.exe'
		}
		]
	},
	{
		'title': 'credentials.txt'
	}
];

const rootNode = document.getElementById('root');
const id = 0;

function createTreeDom(container,arr,hidden) {
	let ul = document.createElement('ul');
	ul.hidden = hidden;
	arr.forEach(obj => {
		const textNode = document.createTextNode(obj['title']);
		let li = document.createElement('li');
		li.appendChild(textNode);
		li.className = 'file';
		if (obj.hasOwnProperty('folder')) {
			li.className = 'folder';
			li.classList.toggle('close', true);
			let childUl = '';
			if (obj['children'] !== null) {
				let childUl = createTreeDom(li, obj['children'],true)	
				childUl;
			} 
			li.append(childUl);
		}
		ul.appendChild(li);
		container.append(ul)
	})
}
createTreeDom(rootNode, data, false);

const lis = document.querySelectorAll('li');
for (let li of lis) {
	let span = document.createElement('span');
	li.prepend(span);
	span.append(span.nextSibling);
}

// --- add input elements ---

// const spans = document.querySelectorAll('span');
// for (let span of spans) {
// 	let input = document.createElement('input');
// 	span.prepend(input);
// 	input.append(input.nextSibling);
// }

document.onclick = function(event) {
	if (event.target.tagName !== 'SPAN') {
		return
	}
	let parent = event.target.parentNode;
	changeClass(parent);
	let childrenContainer = parent.querySelector('ul');
	
	if (parent.className !== 'file') {

		if (!childrenContainer) {
			
			if (parent.classList.contains('empty')) {
				parent.classList.toggle('empty', false);
			} else {
				parent.classList.toggle('empty', true);
			}

		} else {
			childrenContainer.hidden = !childrenContainer.hidden;
		}
	}
}

function changeClass(el) {
	let i = document.createElement('i');
	i.className = 'material-icons';
	if (el.classList.contains('file')) { 
		return 
	}
	if (el.classList.contains('close')) {
		el.classList.toggle('close', false); 

		el.firstChild.firstChild.innerHTML= 'folder_open';
	} else {
		el.classList.toggle('close', true);
		el.firstChild.firstChild.innerHTML = 'folder'
	}
}

lis.forEach(li => {
	let i = document.createElement('i');
	i.className = 'material-icons';
	if (li.classList.contains('file')) {
		li.firstChild.insertAdjacentHTML('afterbegin','<i class="material-icons">insert_drive_file</i>')
	} else if (li.classList.contains('close')) {
		li.firstChild.insertAdjacentHTML('afterbegin','<i class="material-icons">folder</i>')
	} else {
		li.firstChild.insertAdjacentHTML('afterbegin','<i class="material-icons">folder_open</i>')
	}
})

const dataMenu = [
	{
		'title': 'Rename'
	},
	{
		'title': 'Delete item'
	}
]

function createContextMenu(container,arr,hidden) {
	let ul = document.createElement('ul');
	ul.hidden = hidden;
	ul.className = 'context-menu';
	arr.forEach(obj => {
		const textNode = document.createTextNode(obj['title']);
		let li = document.createElement('li');
		li.appendChild(textNode);	
		ul.appendChild(li);
		
		container.append(ul)
	})
}
createContextMenu(rootNode, dataMenu, true);

const menu = document.querySelector('.context-menu');

rootNode.addEventListener('contextmenu', event => {
	event.preventDefault();
	menu.style.top = `${event.clientY}px`;
	menu.style.left = `${event.clientX}px`;
	menu.hidden = false;

	let parent = event.target.parentNode;
	let hightParent = parent.parentNode

	menu.addEventListener('click', ev => {
		// if (ev.target.textNode === 'Rename') {

		// }
		if (ev.target.innerHTML === 'Delete item') {	
			parent.remove();
			if (hightParent.childNodes.length === 0) {
				hightParent.classList.toggle('empty', true)
			}	
		}
	}, false);

}, false);

document.addEventListener('click', event => {
	if (event.button !== 2) {
		menu.hidden = true;
	}
}, false);





