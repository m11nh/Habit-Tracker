export function hide(element) {
	element.style.display = "none";
}

export function reveal(element) {
	element.style.display = "block";
}

export function add_break(parent) {
	let br = document.createElement('br');
	parent.appendChild(br);
}

//export function add_modal(parent) {

