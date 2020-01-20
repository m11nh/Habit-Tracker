import React from "react"

function AdminLoginComponent(props) {
	return (
		<div>
			<button onClick={ () =>
				props.setFormVisibility(prev => (prev === "") ? "none" : "")
			}> Admin Login </button>
			<form onSubmit={props.handleSubmit} style={{display: props.formVisibility}}>
				<input type="text" placeholder="username" value={props.username} onChange={(event) => props.setUsername(event.target.value)}/>
				<input type="password" placeholder="password" value={props.password} onChange={(event) => props.setPassword(event.target.value)}/>
				<button> Sign In</button>
				<p> {props.errors} </p>
			</form>
		</div>
	)
}

export default AdminLoginComponent