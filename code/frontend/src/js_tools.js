//import date
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

export function add_form(parent, id) {
	let form = document.createElement('form');
	form.id = id;
	parent.appendChild(form);
	return form;
}

export function add_text(parent, id, value) {
	let text = document.createElement('text');
	text.id = id;
	text.innerText = value;
	if (parent != '') {
		parent.appendChild(text);
	}
	return text;
}

export function add_input_field(parent, type, id, placeholder, value) {
	let field = document.createElement('input');
	field.type = type;
	field.id = id;
	field.placeholder = placeholder;
	field.value = value;
	parent.appendChild(field);
	return field;
}

export function add_button(parent, type, id, innerText) {
	let button = document.createElement('button');
	button.id = id;
	button.type = type;
	button.innerText = innerText;
	parent.appendChild(button);
	return button;
}

// fetch functions
export function fetchData(url = '', data = {}, method_type = '') {
	if (method_type == 'POST' || method_type == 'PUT') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
			body: JSON.stringify(data)
		})
	}
	if (method_type == 'GET') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
		})
	}
	if (method_type == 'DELETE') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
		})
	}
}

// creating a list
export function add_list(parent, id, elements = []) {
	let ul = document.createElement('ul');
	ul.id = id;
	parent.appendChild(ul);

	for (let element of elements) {
		let li = document.createElement('li');
		li.innerText = element;
		ul.appendChild(li);
	}
	return ul;
}

export function add_list_element(list, element) {
	let li = document.createElement('li');
	li.innerText = element;
	list.appendChild(element);
}

// creating a table
export function add_table(parent, id, table_headings = []) {
	let table = document.createElement('table');
	let tr = document.createElement('tr');

	for (let header of table_headings) {
		let th = document.createElement('th');
		th.innerText = header;
		tr.appendChild(th);
	}

	table.appendChild(tr);
	parent.appendChild(table);

	return table;
}

export function add_table_row(table, row_content = []) {
	let tr = document.createElement('tr');
	for (let content of row_content) {
		let td = document.createElement('td');
		td.appendChild(content);
		tr.appendChild(td);
	}
	table.appendChild(tr);
}

export function create_square(id, class_type) {
	let square = document.createElement('div');
	square.id = id;
	square.classList.add('square');
	square.classList.add(class_type)
	return square; 
}

export function checkoff(square) {
	square.style.backgroundColor = 'green';
}

export function uncheck(square) {
	square.style.backgroundColor = '#555';
}

export function add_div(id) {
	let div = document.createElement('div');
	div.id = id;
	return div;
}

export function add_next_arrow(id) {
	let next_arrow = add_div(id);
	next_arrow.innerText = '❯';
	next_arrow.classList.add('next_arrow');
	return next_arrow; 
}

export function add_prev_arrow(id) {
	let prev_arrow = add_div(id);
	prev_arrow.innerText = '❮';
	prev_arrow.classList.add('prev_arrow');
	return prev_arrow;
}

export function add_calendar(parent, month, year) {
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

	let div = add_div('calendar');
	let days_in_month = 32 - new Date(year, month, '32').getDate();
	let starting_day = new Date(year, month, '1').getDay();
	console.log(starting_day);
	console.log(days_in_month);

	let month_text = add_text(parent, 'month', months[month]);
	month_text.classList.add('month');
	let year_text = add_text(parent, 'year', year);
	year_text.classList.add('year');

	let next_arrow = add_next_arrow('next_arrow');
	let prev_arrow = add_prev_arrow('prev_arrow');

	div.appendChild(year_text);
	add_break(div);
	add_table_row(div, [prev_arrow, month_text, next_arrow]);

	let table = add_table(div, '', ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'])
	
	let row_content = [];
	// month beginning offset: 
	for (let i = 0; i < starting_day; i++) {
		let empty_text = add_text('', '', '');
		row_content.push(empty_text);
	}
	for (let i = 1 + starting_day; i <= days_in_month + starting_day; i++) {
		let day_number = i - starting_day; 
		let day_text = add_text('', `${day_number}-${month}-${year}`, day_number);
		row_content.push(day_text);
		if (i % 7 === 0 || i === days_in_month + starting_day) {
			add_table_row(table, row_content);
			row_content = [];
		}
	}
	parent.appendChild(div);

	return { 'calendar' : div, 'prev_arrow' : prev_arrow, 'next_arrow' : next_arrow }
}

export function highlight_hover(element, color, cursor) {
	element.addEventListener('mouseover', (event) => {
		element.style.color = color;
	})
	element.addEventListener('mouseout', (event) => {
		element.style.color = 'black';
	})
	element.style.cursor = cursor;
}
