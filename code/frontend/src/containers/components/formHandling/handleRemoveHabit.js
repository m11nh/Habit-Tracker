import React from "react"
import fetchData from "./fetchTools"

function handleRemoveHabit(habitName, setErrors, setHabitAdded, setHabitName) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let userName = localStorage.getItem("userName")

	
	let url = `${API}habit?habit_name=${habitName}&user_id=${userId}`
	let fetch = fetchData(url, {}, 'DELETE');
	fetch
	.then((response) => {
		response = {'status' :  response.status, 'myJson' : response.json()};
		return response
	})
	.then((response) => {
		if (response['status'] === 200) {
			response['myJson']
			.then((myJson) => {
				setErrors("successfully removed")
				setHabitName("")
				setHabitAdded(habitName)
				localStorage.setItem("habitAdded", habitName)
			})
		}
		else {
			response['myJson']
			.then((myJson) => {
				setErrors(myJson.error)
			})
		}
	})


}

export default handleRemoveHabit