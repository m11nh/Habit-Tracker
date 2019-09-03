import { add_form, add_input_field, add_button, postData, add_text } from '/src/js_tools.js'

function add_habit_functionality(parent) {

}

function add_habit(parent) {

}

function add_habit_form(parent) {
	let hash = {};
	hash['form'] = add_form(parent, 'add_habit_form');
	hash['habit_name'] = add_input_field(hash['form'])
}
