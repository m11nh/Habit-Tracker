function fetchData(url = '', data = {}, method_type = '') {
	if (method_type === 'POST' || method_type === 'PUT') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
			body: JSON.stringify(data)
		})
	}
	if (method_type === 'GET') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
		})
	}
	if (method_type === 'DELETE') {
		return fetch(url, {
			method: method_type,
			credentials: 'same-origin',  
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			}, 
		})
	}
}

export default fetchData
