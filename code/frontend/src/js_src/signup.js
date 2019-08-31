export function signup(parent) {
	const api = localStorage.getItem("API_URL");
	const form = signup_form(parent);
}


function signup_form(parent) {
	let username = input_field(parent, 'text', 'signup_username', 'username', '');
	let password = input_field(parent, 'text', 'signup_password', 'password', '');
	let email = input_field(parent, 'text', 'signup_email', 'email', '');
	let button = button(parent, 'signup_button', 'signup');
	return button
}

function input_field(parent, type, id, placeholder, value) {
	let field = document.createElement('input');
	field.type = type;
	field.id = id;
	field.placeholder = placeholder;
	field.value = value;
	parent.appendChild(field);
	return field;
}

function button(parent, id, innerText) {
	let button = document.createElement('button');
	button.id = id;
	button.innerText = innerText;
	parent.appendChild(button);
	return button;
}