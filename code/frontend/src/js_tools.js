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

export function add_text(parent, id) {
	let text = document.createElement('text');
	text.id = id;
	parent.appendChild(text);
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



