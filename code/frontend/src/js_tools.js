export function hide(element) {
	element.style.display = "none";
}

export function reveal(element) {
	element.style.display = "block";
}

export function add_break(parent) {
	let br = document.createElement('br');
	parent.appendChild(br);
}

//export function add_modal(parent) {

export function add_form(parent, id) {
	let form = document.createElement('form');
	form.id = id;
	parent.appendChild(form);
	return form;
}

export function add_text(parent, id, value) {
	let text = document.createElement('text');
	text.id = id;
	text.innerText = value;
	if (parent != '') {
		parent.appendChild(text);
	}
	return text;
}

export function add_input_field(parent, type, id, placeholder, value) {
	let field = document.createElement('input');
	field.type = type;
	field.id = id;
	field.placeholder = placeholder;
	field.value = value;
	parent.appendChild(field);
	return field;
}

export function add_button(parent, type, id, innerText) {
	let button = document.createElement('button');
	button.id = id;
	button.type = type;
	button.innerText = innerText;
	parent.appendChild(button);
	return button;
}

// fetch functions
export function fetchData(url = '', data = {}, method_type = '') {
	if (method_type == 'POST') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
			body: JSON.stringify(data)
		})
	}
	if (method_type == 'GET') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
		})
	}
	if (method_type == 'DELETE') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
		})
	}
}

// creating a list
export function add_list(parent, id, elements = []) {
	let ul = document.createElement('ul');
	ul.id = id;
	parent.appendChild(ul);

	for (let element of elements) {
		let li = document.createElement('li');
		li.innerText = element;
		ul.appendChild(li);
	}
	return ul;
}

export function add_list_element(list, element) {
	let li = document.createElement('li');
	li.innerText = element;
	list.appendChild(element);
}

// creating a table
export function add_table(parent, id, table_headings = []) {
	let table = document.createElement('table');
	let tr = document.createElement('tr');

	for (let header of table_headings) {
		let th = document.createElement('th');
		th.innerText = header;
		tr.appendChild(th);
	}

	table.appendChild(tr);
	parent.appendChild(table);

	return table;
}

export function add_table_row(table, table_content = []) {
	let tr = document.createElement('tr');
	for (let content of table_content) {
		let td = document.createElement('td');
		td.appendChild(content);
		tr.appendChild(td);
	}
	table.appendChild(tr);
}

export function create_square(id, class_type) {
	let square = document.createElement('div');
	square.id = id;
	square.classList.add('square');
	square.classList.add(class_type)
	return square; 
}



