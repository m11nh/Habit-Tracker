import React, { useState } from "react"
import AdminLoginComponent from "./components/AdminLoginComponent"
import handleAdminLogin from "./components/formHandling/handleAdminLogin"

function AdminLoginContainer() {
	const [formVisibility, setFormVisibility] = useState("none")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState("")

	function handleSubmit(event) {
		handleAdminLogin(username, password, setErrors)
		event.preventDefault()
	}

	return (
		<AdminLoginComponent 
			formVisibility={formVisibility}
			setFormVisibility={setFormVisibility}

			username={username}
			setUsername={setUsername}

			password={password}
			setPassword={setPassword}

			handleSubmit={handleSubmit}

			errors={errors}
		/>
	)	

}

export default AdminLoginContainer