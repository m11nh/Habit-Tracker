import { add_signup } from '/src/js_src/signup.js'
import { add_login } from '/src/js_src/login.js'
import { add_logout } from '/src/js_src/logout.js'
import { add_habit } from '/src/js_src/add_habit.js'
import { habit_list } from '/src/js_src/habit_list.js'
import { remove_habit } from '/src/js_src/remove_habit.js'
import habit_progress from '/src/js_src/habit_progress.js'
import habit_checkoff from '/src/js_src/habit_checkoff.js'

export function main_init(API_URL) {
	// set API_URL 
	localStorage.setItem('API_URL', API_URL);
	localStorage.setItem('todays_date', new Date().toDateString());
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
				if (new Date().toDateString() != localStorage.getItem('todays_date')) {
					// change habits._todays_status == True to False
					//only can be fixed if i update the /habit PUT route in routes.py, to take in a query or data body

					// implement the fetch -> todays_status_to_false


					console.log('hey bro');
				}
				console.log('hey bro');
			}, 10000);

			//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

			observer.disconnect();
		})
		observer.observe(main, { attributes: false, childList: true, subtree: true });
	}
}

function todays_status_to_false () {

}






