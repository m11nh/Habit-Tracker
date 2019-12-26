import React from "react"
import fetchData from "./fetchTools"

function handleAddHabit(habitName, setErrors, setHabitAdded) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let userName = localStorage.getItem("userName")
	
	let url = `${API}habit`
	let data = {
		'habit_name': habitName,
		'user_id': userId
	}
	let fetch = fetchData(url, data, 'POST');
	fetch
	.then((response) => {
		response = {'status' :  response.status, 'myJson' : response.json()};
		return response
	})
	.then((response) => {
		if (response['status'] === 200) {
			response['myJson']
			.then((myJson) => {
				alert("successfully added")
				setHabitAdded(habitName)
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

export default handleAddHabit