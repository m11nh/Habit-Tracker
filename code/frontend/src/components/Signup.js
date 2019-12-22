import React, {useState} from "react"

function Signup() {
	// state
	const [ formVisibility, setFormVisibility ] = useState("none")
	const [ username, setUsername ] = useState("")
	const [ password, setPassword ] = useState("")
	const [ email, setEmail ] = useState("")

	// expands and retracts singup form when user clicks on Create New Account
	function formVisibleClick() {
		setFormVisibility(prevDisplayStatus => prevDisplayStatus === "none" ? "" : "none")
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

	// handling of submit 

	return (
		<div>
			<button onClick={formVisibleClick}> Create New Account </button>
			<form style={{display: formVisibility}}>
				<input type="text" onChange={changeUsername} placeholder="username" name="username" value={username}/> 
				<input type="password" onChange={changePassword} placeholder="password" name="password" value={password}/> 
				<input type="text" onChange={changeEmail} placeholder="email" name="email" value={email}/> 
			</form>
		</div>
	)
}	

export default Signup