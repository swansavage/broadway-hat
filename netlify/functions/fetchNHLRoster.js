import fetch from 'node-fetch';

exports.handler = async function (event, context) {
	try {
		const response = await fetch(
			'https://api-web.nhle.com/v1/roster/NYR/20242025'
		);

		// Check if the fetch was successful
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.error('Error fetching NHL roster:', error.message); // Log the exact error

		return {
			statusCode: 500,
			body: JSON.stringify({
				error: 'Failed to fetch NHL roster',
				message: error.message, // Include error message in response for debugging
			}),
		};
	}
};
