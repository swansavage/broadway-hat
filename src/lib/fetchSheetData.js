import { google } from 'googleapis';

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
	keyFile: './src/lib/broadway-hat-6d9a8c120e20.json', // Path to your credentials.json file
	scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
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
