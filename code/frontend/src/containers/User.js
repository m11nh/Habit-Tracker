import React from "react"

function User(props) {
	return (
		<div>
			<h1> HEY BUDDY </h1>
			{props.username} <br />
			{props.email}
		</div>
	)	
}

export default User