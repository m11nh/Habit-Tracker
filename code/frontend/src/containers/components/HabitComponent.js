import React from "react"

function HabitComponent(props) {
	return (
		<div>
			<div onClick={() => props.checkOff(props.name, props.setHabitChecked)} style={{color: props.status === true ? "green" : "black"}}> {props.name} {props.streak} </div>
			<div onClick={() => {
				props.setCalendarHabit(props.name)
				props.setCalendarDaysExecuted(props.daysExecuted)
			}}> view </div>
		</div>
	)
}

export default HabitComponent