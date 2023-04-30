import axios from '../core/axios.js'

export const booksApi = {
	getBooks(title = "") {
		return axios.get('/books', {
			params: {
				title
			}
		})
	},

	getMyBooks() {
		return axios.get('/books/my')
	},

	getBookById(id) {
		return axios.get(`/books/${id}`)
	},

	removeBookById(id) {
		return axios.delete(`/books/${id}`)
	},

	addBook(bookId) {
		return axios.post('/books/add', { bookId })
	},

	returnBook(bookId) {
		return axios.post('/books/return', { bookId })
	},

	uploadBookCover(formData) {
		return axios.post('/upload', formData)
	},

	createBook(data) {
		return axios.post('/books', data)
	}
}