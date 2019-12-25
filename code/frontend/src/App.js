import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupContainer from './containers/SignupContainer'
import LoginContainer from './containers/LoginContainer'
import Logout from './containers/Logout'

function App() {
 	localStorage.setItem("API", "http://127.0.0.1:5000/")
 	// user is logged in 
 	if (localStorage.getItem("userId")) {
		return (
			<div>
				<Logout />
			</div>
		);
	}

	// user not logged in 
	else {
		return (
			<div>
				<SignupContainer />
				<LoginContainer />
			</div>
		)
	}
}

export default App;
