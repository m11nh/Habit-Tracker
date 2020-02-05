import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupContainer from './containers/SignupContainer'
import LoginContainer from './containers/LoginContainer'
import AdminLoginContainer from './containers/AdminLoginContainer'
import Logout from './containers/Logout'
import { TimeDateContainer } from './containers/TimeDateContainer'
import { Habits }from './containers/Habits'
import Account from './containers/Account'
import UserList from './containers/UserList'

function App() {
 	localStorage.setItem("API", "http://127.0.0.1:5000/")
	//localStorage.setItem("type", "")
 	// user is logged in 
 	if (localStorage.getItem("type") === "user") {
		return (
			<div>
				<Logout />
				<Account />
				<TimeDateContainer />
				<Habits />
			</div>
		);
	}

	// admin is logged in 
	else if (localStorage.getItem("type") === "admin") {
		return (
			<div>
				<Logout />
				<UserList />
			</div>
		)
	}

	// user not logged in 
	else {
		return (
			<div>
				<SignupContainer />
				<LoginContainer />
				<AdminLoginContainer />
				{localStorage.getItem("message")}
			</div>
		)
	}
}

export default App;
