import React from "react"

function Logout() {
	function handleClick(event) {
		localStorage.removeItem("userId")
		localStorage.removeItem("userName")
		document.location.reload()
	}
	return (
		<button onClick={handleClick}>
			Logout
		</button>
	)
}

export default Logout