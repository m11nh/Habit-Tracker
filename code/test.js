const fetch = require("node-fetch")

fetch("http://127.0.0.1:5000/users")
	.then((response) => {
		return response.json();
	})
	.then((myJson) => {
		console.log(myJson[0])
	})

settings1 = {
	method: 'POST',
	headers: {
		'Accept' : 'application/json', 
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify({
		"username" : "Jessica",
		"password" : "Rabbit",
		"email" : "jr123@gmail.com"
	})
}

fetch("http://127.0.0.1:5000/user", settings1)
	.then((response) => {
		console.log(response.status);
	})


settings2 = {
	method: 'DELETE',
	headers: {
		'Accept' : 'application/json', 
		'Content-Type' : 'application/json'
	},
	body: JSON.stringify({
		"id" : "13"
	})
}

fetch("http://127.0.0.1:5000/user", settings2)
	.then((response) => {
		console.log(response)
	})
