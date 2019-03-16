import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-b5055.firebaseio.com/'
});

export default instance; 