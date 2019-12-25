import React from "react"

function SignupComponent(props) {
	return(
		<div>
			<button onClick={props.changeFormVisibility}> Create New Account </button>
			<form 
				style={{display: props.formVisibility}}
				onSubmit={props.handleSubmit}
			>
				<input 
					type="text" 
					onChange={props.changeUsername} 
					placeholder="username" 
					name="username" 
					value={props.username}
				/> 
				<input 
					type="password" 
					onChange={props.changePassword} 
					placeholder="password" 
					name="password" 
					value={props.password}
				/> 
				<input 
					type="text" 
					onChange={props.changeEmail} 
					placeholder="email" 
					name="email" 
					value={props.email}
				/> 
				<p>
					{props.errors}
				</p>
				<button>
					Signup
				</button>
			</form>
		</div>
	)
}

export default SignupComponent