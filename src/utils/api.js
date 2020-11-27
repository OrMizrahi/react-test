import axios from 'axios';

const BASE_URL = 'https://private-052d6-testapi4528.apiary-mock.com';

export const API = {
	authenticate: (bodyData) => {
		return axios.post(`${BASE_URL}/authenticate`, bodyData);
	},
	fetchProjects: (token) => {
		return axios.get(`${BASE_URL}/info`, {
			headers: { Authorization: `Bearer ${token}` },
		});
	},
};
