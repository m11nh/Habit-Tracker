import React from "react"

function HabitComponent(props) {
	return (
		<div>
			<div onClick={() => {
				props.checkOff(props.name, props.setHabitChecked)
				props.setHabitCheckoffChange(prev => prev + 1)
			}} style={{color: props.status === true ? "green" : "black"}}> {props.name} {props.streak} </div>
			<div onClick={() => {
				props.setCalendarHabit(props.name)
				props.setCalendarDaysExecuted(props.daysExecuted)
				props.setCalendarDate(getCalendarDate())
			}}> view </div>
		</div>
	)
}

function getCalendarDate() {
	let date = new Date
	let year = date.getYear() + 1900
	let month = date.getMonth()
	return [year, month]
}


export default HabitComponent