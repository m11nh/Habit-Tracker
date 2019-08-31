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

export function add_div(parent, id) {
	let div = document.createElement('div');
	div.id = id;
	parent.appendChild(div);
	return div;
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
export function postData(url = '', data = {}) {
	return fetch(url, {
		method: 'POST',
		credentials: 'same-origin',  
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		}, 
		body: JSON.stringify(data)
	})
}


