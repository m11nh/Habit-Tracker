import { add_signup } from '/src/js_src/signup.js'
import { add_login } from '/src/js_src/login.js'
import { add_logout } from '/src/js_src/logout.js'

export function main_init(API_URL) {
	// set API_URL 
	localStorage.setItem('API_URL', API_URL);
	let main = document.getElementById('main');

	let auth_id = localStorage.getItem('auth_id');

	if (! auth_id) {
		let signup = add_signup(main);
		let login = add_login(main);
	}
	else {
		let logout = add_logout(main);
	}
}







