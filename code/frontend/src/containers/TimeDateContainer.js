import React, {useState, useEffect} from "react"

function TimeDateContainer() {
	const [time, setTime] = useState(getTime())
	const [date, setDate] = useState(getDate())

	setInterval(() => {
		setTime(getTime)
	}, 1000)


	return (
		<div>
			<h1> {time} </h1>
			<p> {date} </p>
		</div>
	)	
}

function getTime() {
	let date = new Date()

	let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
	let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
	let second = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

	let time = `${hour} : ${minute} : ${second}`

	return time
}

function getDate() {
	let date = new Date()
	return date.toDateString()
}

export { TimeDateContainer, getDate }