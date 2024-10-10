import { google } from 'googleapis';
import * as dotenv from 'dotenv';

dotenv.config();

const auth = new google.auth.JWT({
	email: process.env.GOOGLE_CLIENT_EMAIL,
	key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure private key formatting
	scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'], // Add the read-only scope here
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
