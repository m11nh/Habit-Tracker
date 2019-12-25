import React, {useState} from "react"
import SignupComponent from "./components/SignupComponent"
import handleSignup from "./components/formHandling/handleSignup"

function SignupContainer() {
	// state
	const [ formVisibility, setFormVisibility ] = useState("none")
	const [ username, setUsername ] = useState("")
	const [ password, setPassword ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ errors, setErrors ] = useState("")

	// expands and retracts singup form when user clicks on Create New Account
	function changeFormVisibility() {
		setFormVisibility(prevDisplayStatus => prevDisplayStatus === "none" ? "" : "none")
		setUsername("")
		setPassword("")
		setEmail("")
		setErrors("")
	}

	// handles changes in form values
	function changeUsername(event) {
		setUsername(event.target.value)
	}

	function changePassword(event) {
		setPassword(event.target.value)
	}

	function changeEmail(event) {
		setEmail(event.target.value)
	}

	function handleSubmit(event) {
		const API = localStorage.getItem("API")
		handleSignup(username, password, email, API, setErrors)
		event.preventDefault()
	}

	// handling of submit 
	return (
		<SignupComponent 
			username={username}
			password={password}
			email={email}
			formVisibility={formVisibility}
			errors={errors}

			changeFormVisibility={changeFormVisibility} 
			changeUsername={changeUsername}
			changePassword={changePassword}
			changeEmail={changeEmail}

			handleSubmit={handleSubmit}
		/>
	)
}	

export default SignupContainer
