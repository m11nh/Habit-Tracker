import React, { useState, useEffect } from "react"
import fetchData from "./components/formHandling/fetchTools"

function HabitList() {
	const [ userHabits, setUserHabits ] = useState()

	useEffect(() => {
		GetUserHabits(setUserHabits)
	}, [])

	return (
		<div>
			{userHabits}
		</div>
	)
}

function GetUserHabits(setUserHabits) {
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

export default HabitList

