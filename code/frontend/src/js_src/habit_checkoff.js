import { checkoff, uncheck, fetchData } from '/src/js_tools.js'
function habit_checkoff(parent) {
	let observer = new MutationObserver(() => {
		let todays_status_squares = document.getElementsByClassName('todays_status');
		for (let square of todays_status_squares) {
			add_habit_checkoff_event(square);
		}
		observer.disconnect();
	})
	observer.observe(parent, { attributes: false, childList: true, subtree: true });

}

function add_habit_checkoff_event(square) {
	let habit_name = square.id;
	square.addEventListener('click', (event) => {
		console.log(square);
		let fetch = fetch_checkoff(habit_name);
		fetch.then(response => response.json())
		.then((myJson) => {
			;
			if (myJson.habit_status === 'checked') {
				document.getElementById(`streak_${habit_name}`).innerText++
				checkoff(square);
				increment_streak(habit_name);
			}
			else {
				uncheck(square);
				decrement_streak(habit_name);
			}
		})
	})
}

function fetch_checkoff(habit_name) {
	let apiUrl = localStorage.getItem('API_URL');
	let url = `${apiUrl}habit`;
	let user_id = localStorage.getItem('auth_id');
	let data = { 'habit_name' : habit_name, 'user_id' : user_id }
	let fetch = fetchData(url, data, 'PUT')
	return fetch
}

function increment_streak(habit_name) {
	let streak_element = document.getElementById(`streak_${habit_name}`);
	let new_streak = Number(streak_element.innerText) + 1;
	streak_element.innerText = newStreak;
}

function decrement_streak(habit_name) {
	let streak_element = document.getElementById(`streak_${habit_name}`);
	let new_streak = Number(streak_element.innerText) - 1;
	streak_element.innerText = new_streak;
}
export default habit_checkoff;