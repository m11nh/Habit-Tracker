import { checkoff, uncheck } from '/src/js_tools.js'
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
		checkoff(square);
	})
}

export default habit_checkoff;