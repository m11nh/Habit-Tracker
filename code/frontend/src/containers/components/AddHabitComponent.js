import React from "react"

function AddHabitComponent(props) {
	return (
		<div>
			<button onClick={props.changeFormVisibility}>Create New Habit</button>
			<form style={{display: props.formVisibility}} onSubmit={props.handleAddSubmit}>
				<input placeholder="Habit Name" value={props.habitAddName} onChange={props.changeHabitAddName}/>
				<button> create </button>
				<p>{props.addErrors}</p>
			</form>
		</div>
	)	
}

export default AddHabitComponent