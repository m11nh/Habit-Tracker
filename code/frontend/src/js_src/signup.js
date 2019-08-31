import { add_div, add_input_field, add_button, postData } from '/src/js_tools.js'

export function add_signup(parent) {
	const api = localStorage.getItem("API_URL");
	const form = add_signup_form(parent);
	add_signup_event(form);
	return form;
}


function add_signup_form(parent) {
	let hash = {};
	hash['div'] = add_div(parent, 'signup_form');
	hash['username'] = add_input_field(hash['div'], 'text', 'signup_username', 'username', '');
	hash['password'] = add_input_field(hash['div'], 'text', 'signup_password', 'password', '');
	hash['email'] = add_input_field(hash['div'], 'text', 'signup_email', 'email', '');
	hash['signup_button'] = add_button(hash['div'], 'button', 'signup_button', 'signup');
	return hash
}

function add_signup_event(form) {
	let apiUrl = localStorage.getItem('API_URL');
	let button = form['signup_button'];
	button.addEventListener('click', (event) => {
		let data = {
			'username': form['username'].value,
			'password': form['password'].value,
			'email': form['email'].value 
		}
		let url = `${apiUrl}user`
		let fetch = postData(url, data);
		fetch.then((response) => {
			alert(response.status)
		})
	})
	

}

