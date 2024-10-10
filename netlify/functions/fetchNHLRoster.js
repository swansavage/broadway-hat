const fetch = require('node-fetch');

exports.handler = async function (event, context) {
	const apiUrl = 'https://api-web.nhle.com/v1/roster/NYR/20242025'; // NHL API URL for Rangers Roster
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();

		// Combine forwards, defensemen, and goalies
		const roster = [...data.forwards, ...data.defensemen, ...data.goalies];

		return {
			statusCode: 200,
			body: JSON.stringify(roster),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: 'Failed to fetch Rangers roster' }),
		};
	}
};
