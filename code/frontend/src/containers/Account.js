import React, { useState } from "react"

function Account() {
	const [AccountFormVisibility, SetAccountFormVisibility] = useState("")

	const [ oldPassword, SetOldPassword ] = useState("")
	const [ newPassword, SetNewPassword ] = useState("")
	const [ passwordErrors, setPasswordErrors ] = useState("")

	const [ oldEmail, SetOldEmail ] = useState("")
	const [ newEmail, SetNewEmail ] = useState("")
	const [ emailErrors, setEmailErrors ] = useState("")

	function submitPassword(event) {
		event.preventDefault()
	}

	function submitEmail(event) {
		event.preventDefault()
	}

	return (
		<div>
			<button onClick = {() => SetAccountFormVisibility(prev => prev === "none" ? "" : "none")}>
				Account
			</button>
			<div style={{display: AccountFormVisibility}}>
				<form onSubmit={(event) => submitPassword(event)}>
					<input onChange={ (event) => SetOldPassword(event.value) } type="text" value={ oldPassword } placeholder="old password"/>
					<input onChange={ (event) => SetNewPassword(event.value) } type="text" value={ newPassword } placeholder="new password"/>
					<button> change password </button>	
					{passwordErrors}
				</form>
				<form onSubmit={(event) => submitEmail(event)}>
					<input onChange={ (event) => SetOldEmail(event.value) } type="text" value={ oldEmail } placeholder="old email"/>
					<input onChange={ (event) => SetNewEmail(event.value) } type="text" value={ newEmail } placeholder="new email"/>
					<button> change email </button>
					{emailErrors}
				</form>
			</div>
		</div>
	)
}

export default Account