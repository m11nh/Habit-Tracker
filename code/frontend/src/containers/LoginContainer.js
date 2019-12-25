import React, {useState} from "react"
import LoginComponent from "./components/LoginComponent"
import handleLogin from "./components/formHandling/handleLogin"

function LoginContainer() {
	const [formVisibility, setFormVisibility] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState("")

	function changeUsername(event) {
		setUsername(event.target.value)
	}

	function changePassword(event) {
		setPassword(event.target.value)
	}

	function changeFormVisibility(event) {
		setFormVisibility(prevFormVisibility => prevFormVisibility === "" ? "none" : "")
		setUsername("")
		setPassword("")
		setErrors("")
	}

	function handleSubmit(event) {
		let API = localStorage.getItem("API")
		handleLogin(username, password, API, setErrors)
		event.preventDefault()
	}

	return (
		<LoginComponent 
			username={username}
			changeUsername={changeUsername}

			password={password}
			changePassword={changePassword}

			errors={errors}

			formVisibility={formVisibility}
			changeFormVisibility={changeFormVisibility}

			handleSubmit={handleSubmit}
		/>
	)
}

export default LoginContainer