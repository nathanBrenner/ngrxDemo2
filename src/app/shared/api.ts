export const API_ENDPOINT = () => {
	return document.URL.split('/')[2] == 'localhost:4200' 
		? 
		'http://127.0.0.1:8000/api/v1' 
		: 
		'todo: add production server'
}