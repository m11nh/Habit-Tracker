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
	//alert(props.daysExecuted)

	let year = props.year
	let month = (props.month + 1) < 10 ? `0${props.month + 1}` : props.month + 1

	let days_in_month = 32 - new Date(props.year, props.month, '32').getDate();
	let starting_day = new Date(props.year, props.month, '1').getDay();
	let nextArrow = '❯';
	let prevArrow = '❮';

	let empty = []
	for (let i = 0; i < starting_day; i++) {
		let empty_text = <td> </td>
		empty.push(empty_text);
	}
	let total = []

	for (let i = 1 + starting_day; i <= days_in_month + starting_day; i++) {
		let day_number = i - starting_day; 
		let date = `${year}-${month}-${day_number}`
		let day_text = <td> {day_number} </td>
		if (props.daysExecuted.includes(date)) {
			day_text = <td className = "active"> {day_number} </td>;
		}
		console.log(props.daysExecuted)
		empty.push(day_text)

		if (i % 7 === 0 || i === days_in_month + starting_day) {
			total.push(<tr> {empty} </tr>);
			empty = []
		}
	}

	return (
		<div>
			<p> { months[props.month] } { props.year } { props.habit } </p>
			<div onClick={ () => props.prevCalendarClick([props.year, props.month], props.setCalendarDate) }>
				{ prevArrow } 
			</div>
			<div onClick={ () => props.nextCalendarClick([props.year, props.month], props.setCalendarDate) }>
				{ nextArrow } 
			</div>
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
			{ total }
			</table>
		</div>
	)
}

export default CalendarComponent