import { add_calendar, highlight_hover } from '/src/js_tools.js'

export default function habit_progress(parent) {
	let calendar = add_calendar(parent, 'December', 2011);
	let observer = new MutationObserver(() => {
		let habit_names = document.getElementsByClassName('habit_name_text');
		for (let habit of habit_names) {
			highlight_hover(habit, 'blue', 'pointer');
			habit_progress_event(parent, habit);
		}
		observer.disconnect();
	})
	observer.observe(parent, { attributes: false, childList: true, subtree: true });
}

function habit_progress_event(parent, habit_name_element) {
	habit_name_element.addEventListener('click', (event) => {
		add_calendar(parent, 'october', '2020');
	})

}
