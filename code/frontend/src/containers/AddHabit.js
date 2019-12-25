import React, {useState} from "react"
import AddHabitComponent from "./components/AddHabitComponent"
import handleAddHabit from "./components/formHandling/handleAddHabit"

function AddHabit() {
	const [formVisibility, setFormVisibility] = useState("")
	const [ habitName, setHabitName ] = useState("")
	const [ errors, setErrors] = useState("")

	function changeFormVisibility(event) {
		setFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
		setHabitName("")
	}

	function changeHabitName(event) {
		setHabitName(event.target.value)
	}

	function handleSubmit(event) {
		handleAddHabit(habitName, setErrors)
		event.preventDefault()

	}

	return (
		<AddHabitComponent 
			changeFormVisibility={changeFormVisibility}
			formVisibility={formVisibility}

			habitName={habitName}
			changeHabitName={changeHabitName}

			handleSubmit={handleSubmit}

			errors={errors}
		/>
	)
}

export default AddHabit