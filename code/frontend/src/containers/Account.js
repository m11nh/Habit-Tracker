import React, { useState, useEffect } from "react"
import fetchData from "./components/formHandling/fetchTools"
import AccountComponent from "./components/AccountComponent"


function Account() {
	const [AccountFormVisibility, setAccountFormVisibility] = useState("")

	const [ oldPassword, setOldPassword ] = useState("")
	const [ newPassword, setNewPassword ] = useState("")
	const [ passwordErrors, setPasswordErrors ] = useState("")

	const [ newEmail, setNewEmail ] = useState("")
	const [ emailErrors, setEmailErrors ] = useState("")

	// account details
	const [ username, setUsername ] = useState("")
	const [ email, setEmail ] = useState("")

	getUser(setUsername, setEmail)

	return (
		<AccountComponent 
			AccountFormVisibility={AccountFormVisibility}
			setAccountFormVisibility={setAccountFormVisibility}

			oldPassword={oldPassword}
			newPassword={newPassword}
			passwordErrors={passwordErrors}

			setOldPassword={setOldPassword}
			setNewPassword={setNewPassword}
			setPasswordErrors={setPasswordErrors}

			newEmail={newEmail}
			emailErrors={emailErrors}

			setNewEmail={setNewEmail}
			setEmailErrors={setEmailErrors}

			submitPassword={submitPassword}
			submitEmail={submitEmail}

			email={email}
			username={username}
		/>
	)
}

export default Account

function submitPassword(event, oldPassword, newPassword, setPasswordErrors) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let url = `${API}user`
	let data = {
		'user_id' : userId,
		'action' : 'changePassword',
		'oldPassword' : oldPassword, 
		'newPassword' : newPassword
	}
	console.log(data)
	let fetch = fetchData(url, data, "PUT")
	fetch.then(response => {
		if (response.status == "200") {
			setPasswordErrors('successfully changed password')
		}
		return response.json()
	}).then(myJson => {
		console.log(myJson)
		setPasswordErrors(myJson.error)
	})
	event.preventDefault()
}

function submitEmail(event, newEmail, setEmailErrors) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let url = `${API}user`
	let data = {
		'user_id' : userId,
		'action' : 'changeEmail',
		'newEmail' : newEmail
	}
	console.log(data)
	let fetch = fetchData(url, data, "PUT")
	fetch.then(response => {
		if (response.status == "200") {
			setEmailErrors('successfully changed email')
		}
		return response.json()
	}).then(myJson => {
		console.log(myJson)
		setEmailErrors(myJson.error)
	})
	event.preventDefault()
}

function getUser(setUsername, setEmail) {
	let API = localStorage.getItem("API")
	let userId = localStorage.getItem("userId")
	let url = `${API}user?user_id=${userId}`

	let fetch = fetchData(url, {}, "GET")
	fetch.then(response => {
		return response.json()
	}).then(myJson => {
		setUsername(myJson.username)
		setEmail(myJson.email)
	})
}
