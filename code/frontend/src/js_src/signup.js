import { add_form, add_input_field, add_button, postData, add_text } from '/src/js_tools.js'

export function add_signup(parent) {
	const api = localStorage.getItem("API_URL");
	const form = add_signup_form(parent);
	add_signup_event(form);
	return form;
}


function add_signup_form(parent) {
	let hash = {};
	hash['form'] = add_form(parent, 'signup_form');
	hash['username'] = add_input_field(hash['form'], 'text', 'signup_username', 'username', '');
	hash['password'] = add_input_field(hash['form'], 'text', 'signup_password', 'password', '');
	hash['email'] = add_input_field(hash['form'], 'text', 'signup_email', 'email', '');
	hash['signup_button'] = add_button(hash['form'], 'button', 'signup_button', 'signup');
	hash['message'] = add_text(hash['form'], 'signup_message');

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
		let url = `${apiUrl}user`;
		let fetch = postData(url, data);
		fetch
		.then((response) => {
			response = {'status' :  response.status, 'myJson' : response.json()};
			return response
		})
		.then((response) => {
			if (response['status'] == 200) {
				response['myJson']
				.then((myJson) => {
					let message = `Signup successful. Login with username: ${myJson._username}, password: ${myJson._password}`;
					form['message'].innerText = message;
					form['form'].reset()
				})
			}
			else {
				response['myJson']
				.then((myJson) => {
					form['message'].innerText = myJson.error
				})
			}
		})
	})
	

}



