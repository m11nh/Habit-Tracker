import React, {useState, useEffect} from "react"
import AddHabitComponent from "./components/AddHabitComponent"
import handleAddHabit from "./components/formHandling/handleAddHabit"
import fetchData from "./components/formHandling/fetchTools"

export function Habits() {
	// add habit
	const [formVisibility, setFormVisibility] = useState("")
	const [ habitName, setHabitName ] = useState("")
	const [ errors, setErrors] = useState("")
	const [ habitAdded, setHabitAdded ] = useState("") 

	// habit list
	const [ userHabits, setUserHabits ] = useState()

	function changeFormVisibility(event) {
		setFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
		setHabitName("")
		setErrors("")
	}

	function changeHabitName(event) {
		setHabitName(event.target.value)
	}

	function handleSubmit(event) {
		handleAddHabit(habitName, setErrors, setHabitAdded, setHabitName)
		event.preventDefault()
	}

	useEffect(() => {
		getUserHabits(setUserHabits)
	}, [habitAdded])

	return (
		<div>
			<AddHabitComponent 
				changeFormVisibility={changeFormVisibility}
				formVisibility={formVisibility}

				habitName={habitName}
				changeHabitName={changeHabitName}

				handleSubmit={handleSubmit}

				errors={errors}
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




