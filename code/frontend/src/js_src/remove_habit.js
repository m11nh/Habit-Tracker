import { add_form, add_input_field, add_button, fetchData, add_text } from '/src/js_tools.js'

export function remove_habit(parent) {
	let form = add_remove_habit_form(parent);
	return form;
}

function add_remove_habit_form(parent) {
	let hash = {};
	hash['form'] = add_form(parent, 'remove_habit_form');
	hash['habit_name'] = add_input_field(hash['form'], 'text', 'remove_habit_name', 'habit name', '');
	hash['button'] = add_button(hash['form'], 'button', 'remove_habit_button', 'remove habit')
}

function remove_habit_fetch_handler(fetch, parent) {
	return;
}