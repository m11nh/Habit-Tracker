import { add_button } from '/src/js_tools.js'

export function add_logout(parent) {
	logout_button = add_button(parent, 'button', 'logout_button', 'logout');
	add_logout_event(logout_button);
	return logout_button
}

function add_logout_event(logout_button) {
	logout_button.addEventListener('click', (event) => {
		localStorage.removeItem('auth_id');
		document.location.reload();
	})
}

