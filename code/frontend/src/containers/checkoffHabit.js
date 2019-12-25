import React from "react"
import fetchData from "./components/formHandling/fetchTools"

function CheckOffHabit() {
	getUserHabits()
	return (
		<p> Sup Cuz </p>
	)
}

function getUserHabits() {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let habit_name = ''
	let url = `${API}habit?habit_name=${habit_name}&user_id=${userId}`

	let fetch = fetchData(url, {}, 
	 "GET")
	fetch
	.then((response) => {
		alert(response.status)
	})

}

export default CheckOffHabit