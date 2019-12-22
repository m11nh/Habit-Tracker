import { add_form, add_input_field, add_button, fetchData, add_text } from '/src/js_tools.js'

export function add_habit(parent) {
	let form = add_habit_form(parent);
	add_create_habit_event(form);
	return form 
}

function add_habit_form(parent) {
	let hash = {};
	hash['form'] = add_form(parent, 'add_habit_form');
	hash['name'] = add_input_field(hash['form'], 'text', 'add_habit_name', 'habit name', '');
	hash['button'] = add_button(hash['form'], 'button', 'add_habit_button', 'add habit');
	hash['message'] = add_text(hash['form'], 'add_habit_message', '');
	return hash;
}

function add_create_habit_event(form) {
	let apiUrl = localStorage.getItem('API_URL');
	let button = form['button'];
	button.addEventListener('click', (event) => {
		let url = `${apiUrl}habit`
		let data = {
			'user_id' : localStorage.getItem('auth_id'), 
			'habit_name' : form['name'].value
		}
		let fetch = fetchData(url, data, 'POST');
		add_habit_fetch_handle(fetch, form);
	})
}

function add_habit_fetch_handle(fetch, form) {
	fetch
	.then((response) => {
		return {'status' : response.status, 'myJson' : response.json()}
	})
	.then((response) => {
		if (response['status'] == 200) {
			form['form'].reset();
			document.location.reload(); 
		}
		else {
			response['myJson']
			.then((myJson) => {
				form['message'].innerText = myJson.error;
			})
		}
	})
}


 
