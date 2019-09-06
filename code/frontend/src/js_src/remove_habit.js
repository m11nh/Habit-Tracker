import { add_form, add_input_field, add_button, fetchData, add_text } from '/src/js_tools.js'

export function remove_habit(parent) {
	let form = add_remove_habit_form(parent);
	add_remove_habit_event(form);
	return form;
}

function add_remove_habit_form(parent) {
	let hash = {};
	hash['form'] = add_form(parent, 'remove_habit_form');
	hash['habit_name'] = add_input_field(hash['form'], 'text', 'remove_habit_name', 'habit name', '');
	hash['button'] = add_button(hash['form'], 'button', 'remove_habit_button', 'remove habit');
	hash['message'] = add_text(hash['form'], 'remove_habit_message', '');
	return hash;
}

function add_remove_habit_event(form) {
	let button = form['button'];
	button.addEventListener('click', (event) => {
		let apiUrl = localStorage.getItem('API_URL');
		let user_id = localStorage.getItem('auth_id');
		let habit_name = form['habit_name'].value;
		let url = `${apiUrl}habit?user_id=${user_id}&habit_name=${habit_name}`;
		let fetch = fetchData(url, {}, 'DELETE');
		remove_habit_fetch_handler(fetch, form);
	})
}

function remove_habit_fetch_handler(fetch, form) {
	fetch
	.then((response) => {
		response = {'status' : response.status, 'myJson' : response.json()};
		return response;
	})
	.then((response) => {
		if (response['status'] == 200) {
			document.location.reload();
			return;
		}
		else {
			response['myJson']
			.then((myJson) => {
				form['message'].innerText = myJson.error;
			})
		}
	})
}