const fetch = require('node-fetch');

exports.handler = async function (event, context) {
	const apiUrl = 'https://api-web.nhle.com/v1/roster/NYR/20242025'; // Adjust API endpoint

	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Failed to fetch NHL Roster' }),
		};
	}
};
