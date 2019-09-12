import { add_calendar, highlight_hover } from '/src/js_tools.js'

export default function habit_progress(parent) {
		let habit_names = document.getElementsByClassName('habit_name_text');
		for (let habit of habit_names) {
			highlight_hover(habit, 'blue', 'pointer');
			habit_progress_event(parent, habit);
		}
}

function habit_progress_event(parent, habit_name_element) {
	habit_name_element.addEventListener('click', (event) => {
		add_calendar(parent, 9, 2019);
	})

}
