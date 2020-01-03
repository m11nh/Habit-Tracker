import React, {useState, useEffect} from "react"
import AddHabitComponent from "./components/AddHabitComponent"
import RemoveHabitComponent from "./components/RemoveHabitComponent"
import handleAddHabit from "./components/formHandling/handleAddHabit"
import handleRemoveHabit from "./components/formHandling/handleRemoveHabit"
import fetchData from "./components/formHandling/fetchTools"

export function Habits() {
	// add habit
	const [formVisibility, setFormVisibility ] = useState("")

	const [ habitAddName, setHabitAddName ] = useState("")
	const [ addErrors, setAddErrors ] = useState("")
	const [ habitAdded, setHabitAdded ] = useState("") 

	const [ habitRemoveName, setHabitRemoveName ] = useState("")
	const [ removeErrors, setRemoveErrors ] = useState("")
	const [ habitRemoved, setHabitRemoved ] = useState("")


	// habit list
	const [ userHabits, setUserHabits ] = useState()

	function changeFormVisibility(event) {
		setFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
	}

	/*
	function changeHabitAddFormVisibility(event) {
		setHabitAddFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
	}

	function changeHabitRemoveFormVisibility(event) {
		setHabitRemoveFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
	}
	*/


	function changeHabitAddName(event) {
		setHabitAddName(event.target.value)
	}

	function changeHabitRemoveName(event) {
		setHabitRemoveName(event.target.value)
	}

	function handleAddSubmit(event) {
		handleAddHabit(habitAddName, setAddErrors, setHabitAdded, setHabitAddName)
		event.preventDefault()
	}

	function handleRemoveSubmit(event) {
		handleRemoveHabit(habitRemoveName, setRemoveErrors, setHabitRemoved, setHabitRemoveName)
		event.preventDefault()
	}

	useEffect(() => {
		getUserHabits(setUserHabits)
	}, [habitAdded, habitRemoved])

	return (
		<div>
			<AddHabitComponent 
				changeFormVisibility={changeFormVisibility}
				formVisibility={formVisibility}

				habitAddName={habitAddName}
				changeHabitAddName={changeHabitAddName}

				handleAddSubmit={handleAddSubmit}

				addErrors={addErrors}
			/>
			<RemoveHabitComponent
				changeFormVisibility={changeFormVisibility}
				formVisibility={formVisibility}

				habitRemoveName={habitRemoveName}
				changeHabitRemoveName={changeHabitRemoveName}

				handleRemoveSubmit={handleRemoveSubmit}

				removeErrors={removeErrors}
			/>
			{userHabits}	
		</div>

	)
}

export function getUserHabits(setUserHabits) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let habit_name = ''
	let url = `${API}habit?habit_name=${habit_name}&user_id=${userId}`

	let fetch = fetchData(url, {}, 
	 "GET")

	fetch
	.then((response) => {
		response = {'status' :  response.status, 'myJson' : response.json()};
		return response
	})
	.then((response) => {
		if (response['status'] === 200) {
			response['myJson']
			.then((myJson) => {
				// display list of habits
				setUserHabits(myJson.habit_list.map((habit) => {
					console.log(habit)
					return (
						<p> {habit._name} </p>
					)
				}))
			})
		}
		else {
			response['myJson']
			.then((myJson) => {

			})
		}
	})
}




