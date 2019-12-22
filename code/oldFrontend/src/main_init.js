import { add_signup } from '/src/js_src/signup.js'
import { add_login } from '/src/js_src/login.js'
import { add_logout } from '/src/js_src/logout.js'
import { add_habit } from '/src/js_src/add_habit.js'
import { habit_list } from '/src/js_src/habit_list.js'
import { remove_habit } from '/src/js_src/remove_habit.js'
import habit_progress from '/src/js_src/habit_progress.js'
import habit_checkoff from '/src/js_src/habit_checkoff.js'
import { fetchData } from  '/src/js_tools.js'

export function main_init(API_URL) {
	// set API_URL 
	localStorage.setItem('API_URL', API_URL);
	if (! localStorage.getItem('todays_date')) {
		//set the date
		localStorage.setItem('todays_date', new Date().toDateString());
	}

	// if the stored date is not valid update it, and change habit_todays_status to false
	if (new Date().toDateString() != localStorage.getItem('todays_date')) {
		localStorage.setItem('todays_date', new Date().toDateString());
		// update using fetch (get list of habits, update each habit)
	}

	let main = document.getElementById('main');
	let auth_id = localStorage.getItem('auth_id');


	if (! auth_id) {
		let signup = add_signup(main);
		let login = add_login(main);
	}
	else {
		let logout = add_logout(main);
		let create_habit = add_habit(main);
		let habits = habit_list(main);
		let habit_remove = remove_habit(main);

		let observer = new MutationObserver(() => {
			let checkoff = habit_checkoff(main);
			let progress = habit_progress(main);
			//refactor code here (fixing bug where habit status is still true after new day occurs)
			setInterval(() => {
				//This would be live update + perhaps of getting habit names from the html, i could use fetch to get habits from the user data
				if (new Date().toDateString() != localStorage.getItem('todays_date')) {
					// change habits._todays_status == True to False
					//only can be fixed if i update the /habit PUT route in routes.py, to take in a query or data body
					let todays_status_squares = document.getElementsByClassName('todays_status');
					for (let square of todays_status_squares) {
						let habit_name = square.id;
						todays_status_to_false(square.id);
					}
				}
			}, 100000);

			//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

			observer.disconnect();
		})
		observer.observe(main, { attributes: false, childList: true, subtree: true });
	}
}

function todays_status_to_false (habit_name) {
	let apiUrl = localStorage.getItem('API_URL');
	let url = `${apiUrl}habit`;
	let user_id = localStorage.getItem('auth_id');
	let data = { 'habit_name' : habit_name, 'user_id' : user_id, 'action': 'todays_status_to_false' }
	let fetch = fetchData(url, data, 'PUT')
	return fetch
}








