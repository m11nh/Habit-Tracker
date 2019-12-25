import React from "react"

function LoginComponent(props) {
	return (
		<div>
			<button onClick={props.changeFormVisibility}> 
				Login
			</button>
			<form onSubmit={props.handleSubmit} style={{display: props.formVisibility}} value="">
				<input type="username" placeholder="username" value={props.username} onChange={props.changeUsername} />
				<input type="password" placeholder="password" value={props.password} onChange={props.changePassword} />
				<p>
					{props.errors}
				</p>
				<button>
					Sign In
				</button>
			</form>
		</div>
	)
}

export default LoginComponent