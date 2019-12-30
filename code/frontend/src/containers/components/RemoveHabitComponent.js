import React from "react"

function RemoveHabitComponent(props) {
	return (
		<div>
			<button onClick={props.changeFormVisibility}>Remove Habit</button>
			<form style={{display: props.formVisibility}} onSubmit={props.handleRemoveSubmit}>
				<input placeholder="Habit Name" value={props.habitRemoveName} onChange={props.changeHabitRemoveName}/>
				<button> remove </button>
				<p>{props.removeErrors}</p>
			</form>
		</div>
	)	
}

export default RemoveHabitComponent