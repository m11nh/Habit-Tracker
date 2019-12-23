import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignupContainer from './containers/SignupContainer'

function App() {
 	localStorage.setItem("API", "http://127.0.0.1:5000/")
	return (
		<SignupContainer />
	);
}

export default App;
