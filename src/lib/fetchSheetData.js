const { google } = require('googleapis');
require('dotenv').config(); // Ensure you load the .env file for local development

const auth = new google.auth.JWT({
	email: process.env.GOOGLE_CLIENT_EMAIL,
	key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure formatting of private key
	scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function getSheetData() {
	const sheetId = '1z1iWr5hdkGRapd4P74-lZGjFoLwOhMMqJEpsbWdJSCI';
	const range = 'Game Log!A2:F';

	try {
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: sheetId,
			range: range,
		});
		console.log('Data fetched successfully:', response.data.values);
		return response.data.values;
	} catch (error) {
		console.error('Error fetching Google Sheets data:', error);
		return [];
	}
}
