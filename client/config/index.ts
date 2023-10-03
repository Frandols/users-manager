export default {
	API_URL:
		process.env.NODE_ENV === 'production' ? '' : 'http://192.168.1.8:3000',
}
