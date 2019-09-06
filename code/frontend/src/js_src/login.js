import { add_form, add_input_field, add_button, fetchData, add_text } from '/src/js_tools.js'

export function add_login(parent) {
	const api = localStorage.getItem("API_URL");
	const form = add_login_form(parent);
	add_login_event(form);
	return form;
}


function add_login_form(parent) {
	let hash = {};
	hash['form'] = add_form(parent, 'login_form');
	hash['username'] = add_input_field(hash['form'], 'text', 'login_username', 'username', '');
	hash['password'] = add_input_field(hash['form'], 'text', 'login_password', 'password', '');
	hash['login_button'] = add_button(hash['form'], 'button', 'login_button', 'login');
	hash['message'] = add_text(hash['form'], 'login_message', '');

	return hash
}

function add_login_event(form) {
	let apiUrl = localStorage.getItem('API_URL');
	let button = form['login_button'];
	button.addEventListener('click', (event) => {
		let data = {
			'username': form['username'].value,
			'password': form['password'].value,
		}
		let url = `${apiUrl}auth/user`;
		let fetch = fetchData(url, data, 'POST');
		
		fetch
		.then((response) => {
			response = {'status' :  response.status, 'myJson' : response.json()};
			return response
		})
		.then((response) => {
			if (response['status'] == 200) {
				response['myJson']
				.then((myJson) => {
					localStorage.setItem('auth_id', myJson.id);
					let message = `login successful.`;
					form['message'].innerText = message;
					form['form'].reset();
					document.location.reload();
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



