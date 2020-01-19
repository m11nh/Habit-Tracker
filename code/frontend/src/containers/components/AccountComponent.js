import React from "react"

function AccountComponent(props) {
	return (
		<div>
			<button onClick = {() => props.setAccountFormVisibility(prev => prev === "none" ? "" : "none")}>
				Account
			</button>
			<div style={{display: props.AccountFormVisibility}}>
				<form onSubmit={(event) => props.submitPassword(event, props.oldPassword, props.newPassword, props.setPasswordErrors)}>
					<input onChange={ (event) => props.setOldPassword(event.target.value) } type="password" value={ props.oldPassword } placeholder="old password"/>
					<input onChange={ (event) => props.setNewPassword(event.target.value) } type="password" value={ props.newPassword } placeholder="new password"/>
					<button> change password </button>	
					{props.passwordErrors}
				</form>
				<form onSubmit={(event) => props.submitEmail(event, props.newEmail, props.setEmailErrors)}>
					<input onChange={ (event) => props.setNewEmail(event.target.value) } type="text" value={ props.newEmail } placeholder="new email"/>
					<button> change email </button>
					{props.emailErrors}
				</form>
				<form onSubmit={(event) => props.submitDeleteAccount(event, props.deletePassword, props.setDeletePasswordErrors)}> 
					<input onChange={ (event) => props.setDeletePassword(event.target.value) } type="password" value={ props.deletePassword } placeholder="password"/>
					<button> Delete Account </button>
					{props.deletePasswordErrors}
				</form>
			</div>
			<p> username: {props.username} </p>
			<p> email: {props.email} </p>
		</div>
	)
}

export default AccountComponent