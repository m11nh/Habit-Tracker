import React from "react"

function HabitComponent(props) {
	return (
			<li onClick={() => props.checkOff(props.name)} style={{color: props.status === true ? "green" : "black"}}> {props.name} </li>
	)
}

export default HabitComponent