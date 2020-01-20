 import React from "react"
 import fetchData from "./fetchTools"

function handleLogin(username, password, API, setErrors) {
	let url = `${API}auth/user`
	let data = {
		'username': username,
		'password': password
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
				// set id and username of logged in user into localStorage
				localStorage.setItem("userId", myJson.id)
				localStorage.setItem("userName", data.username)
				localStorage.setItem("type", "user")

				// refreshes the page
				document.location.reload()
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


 export default handleLogin