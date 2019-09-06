import { fetchData, add_list, add_list_element, add_table, add_table_row, add_text } from '/src/js_tools.js'

export function habit_list(parent) {
	let apiUrl = localStorage.getItem('API_URL');
	let habit_name = '';
	let user_id = localStorage.getItem('auth_id');
	let url = `${apiUrl}habit?habit_name=${habit_name}&user_id=${user_id}`;

	let fetch = fetchData(url, {} , 'GET');
	habit_list_fetch_handle(fetch, parent);
	
}

function habit_list_fetch_handle(fetch, parent) {
	fetch
	.then((response) => {
		return response.json();
	})
	.then((myJson) => {
		let header = ['habit', 'todays status'];
		let table = add_table(parent, 'habit_table', header);

		for (let habit of myJson.habit_list) {
				let text = add_text('', '',  JSON.parse(habit)._name);
				let row_content = [text];
				add_table_row(table, row_content);
		}
	})
}