import { fetchData, add_list, add_list_element } from '/src/js_tools.js'

export function habit_list(parent) {
	let apiUrl = localStorage.getItem('API_URL');
	let habit_id = '';
	let user_id = localStorage.getItem('auth_id');
	let url = `${apiUrl}habit?habit_id=${habit_id}&user_id=${user_id}`;

	let fetch = fetchData(url, {} , 'GET');
	habit_list_fetch_handle(fetch, parent);
	
}

function habit_list_fetch_handle(fetch, parent) {
	fetch
	.then((response) => {
		return response.json();
	})
	.then((myJson) => {
		let habit_list = [];
		for (let habit of myJson.habit_list) {
			console.log(JSON.parse(habit)._name);
			habit_list.push(JSON.parse(habit)._name);
		}
		habit_list = add_list(parent, 'habit', habit_list);
	})
}