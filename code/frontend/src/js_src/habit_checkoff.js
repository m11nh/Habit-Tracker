function habit_checkoff(parent) {
	const todays_status_squares = document.getElementsByClassName('todays_status');
	console.log(todays_status_squares);
	for (let square of todays_status_squares) {
		add_habit_checkoff_event(square);
	}
}

function add_habit_checkoff_event(square) {
	let habit_name = square.id;
	square.addEventListener('click', (event) => {
		alert('clicked');
	})
}

export default habit_checkoff;