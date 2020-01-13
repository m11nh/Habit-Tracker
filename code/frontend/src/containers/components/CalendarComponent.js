import React from "react"

function CalendarComponent(props) {
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
	let days_in_month = 32 - new Date(props.year, props.month, '32').getDate();
	let starting_day = new Date(props.year, props.month, '1').getDay();
	let nextArrow = '❯';
	let prevArrow = '❮';

	let empty = []
	for (let i = 0; i < starting_day; i++) {
		let empty_text = <td> HEY </td>
		empty.push(empty_text);
	}
	alert(empty.length)
	console.log(starting_day);
	console.log(days_in_month);
	return (
		<div>
			<p> { months[props.month] } { props.year } </p>
			<p> {prevArrow} {nextArrow} </p>
			<table>
			<tr>
				<th> sun </th>
				<th> mon </th>
				<th> tue </th>
				<th> wed </th>
				<th> thu </th>
				<th> fri </th>
				<th> sat </th>
			</tr>
			<tr>
				{empty}
			</tr>
			</table>
		</div>
	)
}

export default CalendarComponent