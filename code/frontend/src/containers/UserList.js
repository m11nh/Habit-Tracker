import React from "react"
import User from "./User"
import fetchData from "./components/formHandling/fetchTools"

function UserList() {
	let userListFetch =  getUserLists() 
	let userList = []

	let x = []
	let y = ["1", "2", "3"]
	userListFetch.then((response) => {
		return response.json()
	}).then((myJson) => {
		userList = myJson.list.map(user => {
			return <User username={user.username} email={user.email}/>
		})


		x = y.map(thing => {
			return thing
		})
		console.log(x)
	})

	return (
		<div>
			<h1> HELLO WORLD </h1>
			<User username="minh" email="minh.nguyen19997@hotmail.com"/>
		</div>
	)
}

function getUserLists() {
	let API = localStorage.getItem("API")
	let userId = -1
	let url = `${API}user?user_id=${userId}`
	let fetch = fetchData(url, {}, 'GET')
	return fetch
}

export default UserList