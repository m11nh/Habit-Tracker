import React from "react"
import fetchData from "./fetchTools"

function handleSignup(username, password, email, API, setErrors) {
	let url = `${API}user`
	let data = {
		'username': username,
		'password': password,
		'email': email
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
				setErrors(`Signup Complete. Please login with username: ${username}`)
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

export default handleSignup