import { signup } from '/src/signup.js';

export function main_init(API_URL) {
	// set API_URL 
	alert('hey');
	localStorage.setItem('API_URL', API_URL);
 	main = document.getElementById('main');
	signup = signup(main);

}







