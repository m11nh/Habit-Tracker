import React from "react"
import fetchData from "./fetchTools"

function handleAdminLogin(username, password, setErrors) {
	let API = localStorage.getItem("API")
	let url = `${API}auth/admin`
	let data = {
		"username": username,
		"password": password
	}

	let fetch = fetchData(url, data, "POST")
	fetch.then((response) => {
		response = {'status' :  response.status, 'myJson' : response.json()};
		return response
	}).then(response => {
		if (response['status'] === 200) {
			localStorage.setItem("type", "admin")
			//localStorage.setItem("userId") 
			document.location.reload()
		}
		else {
			response['myJson']
			.then((myJson) => {
				setErrors(myJson.error)
			})
		}
	})

}

export default handleAdminLogin