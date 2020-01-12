import React, {useState, useEffect} from "react"
import AddHabitComponent from "./components/AddHabitComponent"
import RemoveHabitComponent from "./components/RemoveHabitComponent"
import handleAddHabit from "./components/formHandling/handleAddHabit"
import handleRemoveHabit from "./components/formHandling/handleRemoveHabit"
import fetchData from "./components/formHandling/fetchTools"
import HabitComponent from "./components/HabitComponent"
import { getDate }from "./TimeDateContainer"

export function Habits() {
	// add habit
	const [habitAddFormVisibility, setHabitAddFormVisibility] = useState("")
	const [habitRemoveFormVisibility, setHabitRemoveFormVisibility] = useState("")

	const [ habitAddName, setHabitAddName ] = useState("")
	const [ addErrors, setAddErrors ] = useState("")
	const [ habitAdded, setHabitAdded ] = useState("") 

	const [ habitRemoveName, setHabitRemoveName ] = useState("")
	const [ removeErrors, setRemoveErrors ] = useState("")
	const [ habitRemoved, setHabitRemoved ] = useState("")

	const [ habitChecked, setHabitChecked ] = useState(0)

	const [ date, setDate ] = useState(getDate)

	setInterval(() => {
		// 
		setDate(10)
	}, 10000)

	// habit list
	const [ userHabits, setUserHabits ] = useState()
	
	function changeHabitAddFormVisibility(event) {
		setHabitAddFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
		setAddErrors("")
	}

	function changeHabitRemoveFormVisibility(event) {
		setHabitRemoveFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
		setRemoveErrors("")
	}
	


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
		getUserHabits(setUserHabits, setHabitChecked)
		console.log(habitChecked)
	}, [habitAdded, habitRemoved, habitChecked])

	useEffect(() => {
		// go through habit list and uncheck if its already checked
	}, [date])

	return (
		<div>
			<AddHabitComponent 
				changeFormVisibility={changeHabitAddFormVisibility}
				formVisibility={habitAddFormVisibility}

				habitAddName={habitAddName}
				changeHabitAddName={changeHabitAddName}

				handleAddSubmit={handleAddSubmit}

				addErrors={addErrors}
			/>
			<RemoveHabitComponent
				changeFormVisibility={changeHabitRemoveFormVisibility}
				formVisibility={habitRemoveFormVisibility}

				habitRemoveName={habitRemoveName}
				changeHabitRemoveName={changeHabitRemoveName}

				handleRemoveSubmit={handleRemoveSubmit}

				removeErrors={removeErrors}
			/>
			{userHabits}	
		</div>

	)
}

export function getUserHabits(setUserHabits, setHabitChecked) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let habit_name = ''
	let url = `${API}habit?habit_name=${habit_name}&user_id=${userId}`

	let fetch = fetchData(url, {}, "GET")

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
						<HabitComponent 
							name={habit._name}
							status={habit._todays_status}
							checkOff={habitCheckOff}
							setHabitChecked={setHabitChecked}
						/>
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

function habitCheckOff(habitName, setHabitChecked) {
	console.log(habitName)
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let url = `${API}habit`;
	let data = { 'habit_name' : habitName, 'user_id' : userId, 'action': 'check' }

	let fetch = fetchData(url, data, 'PUT')

	fetch.then((response) => {
		console.log(response.status)
	})

	setHabitChecked(prevHabitChecked => prevHabitChecked + 1)
}





