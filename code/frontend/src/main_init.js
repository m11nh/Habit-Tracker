import { add_signup } from '/src/js_src/signup.js';

export function main_init(API_URL) {
	// set API_URL 
	localStorage.setItem('API_URL', API_URL);
 	let main = document.getElementById('main');
	let signup = add_signup(main);
}







