import axios from '../core/axios.js'

export const usersApi = {
	getUsers() {
		return axios.get('/users')
	},

	removeUser(id) {
		return axios.delete(`/users/${id}`)
	}
}