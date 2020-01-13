import React from "react"

function HabitComponent(props) {
	return (
		<div>
			<li onClick={() => props.checkOff(props.name, props.setHabitChecked)} style={{color: props.status === true ? "green" : "black"}}> {props.name} {props.streak} </li>
		</div>
	)
}

export default HabitComponent