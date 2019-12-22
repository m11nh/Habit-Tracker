import { add_calendar, highlight_hover, fetchData} from '/src/js_tools.js'

export default function habit_progress(parent) {
		let habit_names = document.getElementsByClassName('habit_name_text');
		for (let habit of habit_names) {
			highlight_hover(habit, 'blue', 'pointer');
			habit_progress_event(parent, habit);
		}
}

function habit_progress_event(parent, habit_name_element) {
	habit_name_element.addEventListener('click', (event) => {
		let habit_name = habit_name_element.innerText;
		fetch_habit_days_executed(habit_name_element.innerText)
		.then((response) => {
			return response.json();
		}).then((myJson) => {
			return myJson._days_executed; //UP TO HERE
		})
		.then((days_executed) => {
			console.log(days_executed);
			let previous_calendar = document.getElementById('calendar'); 
			if (previous_calendar) {
				previous_calendar.remove();
			}

			// add calendar starting off at the current month and year
			let today = new Date();

			let current_month = today.getMonth();
			let current_year = today.getFullYear();

			let calendar = add_calendar(parent, current_month, current_year, days_executed);
			console.log(calendar['calendar']);
			add_calendar_next_event(parent, calendar['next_arrow'], calendar['calendar'], current_month, current_year, days_executed);
			add_calendar_prev_event(parent, calendar['prev_arrow'], calendar['calendar'], current_month, current_year, days_executed);
		})
	})
}

function add_calendar_next_event(parent, next_arrow, calendar, month, year, days_executed) {
	next_arrow.addEventListener('click', (event) => {
		calendar.remove();

		let new_month = year_month_increment(year, month)['month'];
		let new_year = year_month_increment(year, month)['year'];

		let new_calendar = add_calendar(parent, new_month, new_year, days_executed);
		//recursion
		add_calendar_next_event(parent, new_calendar['next_arrow'], new_calendar['calendar'], new_month, new_year, days_executed);
		add_calendar_prev_event(parent, new_calendar['prev_arrow'], new_calendar['calendar'], new_month, new_year, days_executed);
	})
}

function add_calendar_prev_event(parent, prev_arrow, calendar, month, year, days_executed) {
	prev_arrow.addEventListener('click', (event) => {
		calendar.remove();
		let new_month = year_month_decrement(year, month)['month'];
		let new_year = year_month_decrement(year, month)['year'];

		let new_calendar = add_calendar(parent, new_month, new_year, days_executed);
		//recursion
		add_calendar_prev_event(parent, new_calendar['prev_arrow'], new_calendar['calendar'], new_month, new_year, days_executed);
		add_calendar_next_event(parent, new_calendar['next_arrow'], new_calendar['calendar'], new_month, new_year, days_executed);
	})
}

export function update_calendar(parent, habit_name) {
	//check if current calendar is the current year and month
	let months = [
		 'January', 
		 'February', 
		 'March', 
		 'April', 
		 'May', 
		 'June', 
		 'July', 
		 'August', 
		 'September', 
		 'October', 
		 'November', 
		 'December'
	]
	let date = new Date();
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	console.log(month, year);

	let calendar = document.getElementById('calendar'); 

	if (calendar && document.getElementById('month').innerText == month && document.getElementById('year').innerText == year) {
		calendar.remove();

		fetch_habit_days_executed(habit_name)
		.then((response) => {
			return response.json();
		}).then((myJson) => {
			return myJson._days_executed; //UP TO HERE
		})
		.then((days_executed) => {
			console.log(days_executed);

			// add calendar starting off at the current month and year
			let today = new Date();

			let current_month = today.getMonth();
			let current_year = today.getFullYear();

			let calendar = add_calendar(parent, current_month, current_year, days_executed);
			console.log(calendar['calendar']);
			add_calendar_next_event(parent, calendar['next_arrow'], calendar['calendar'], current_month, current_year, days_executed);
			add_calendar_prev_event(parent, calendar['prev_arrow'], calendar['calendar'], current_month, current_year, days_executed);
		})
	}

}
function year_month_increment(year, month) {
	if (month == 11) {
		return { 'year': year + 1, 'month': 0 }; 
	}
	else {
		return { 'year': year, 'month': month + 1 };
	}
}

function year_month_decrement(year, month) {
	if (month == 0) {
		return { 'year': year - 1, 'month': 11 }; 
	}
	else {
		return { 'year': year, 'month': month - 1 };
	}
}

function fetch_habit_days_executed(habit_name) {
	let apiUrl = localStorage.getItem('API_URL');
	let user_id = localStorage.getItem('auth_id');
	let url = `${apiUrl}habit?user_id=${user_id}&habit_name=${habit_name}`;
	let fetch = fetchData(url, {}, 'GET');
	return fetch; 
}
