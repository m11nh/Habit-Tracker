import React from "react"

function AddHabitComponent(props) {
	return (
		<div>
			<button onClick={props.changeFormVisibility}>Create New Habit</button>
			<form style={{display: props.formVisibility}} onSubmit={props.handleSubmit}>
				<input placeholder="Habit Name" value={props.habitName} onChange={props.changeHabitName}/>
				<button> create </button>
				<p>{props.errors}</p>
			</form>
		</div>
	)	
}

export default AddHabitComponent