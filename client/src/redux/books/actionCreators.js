import { booksApi } from "../../api/booksApi";
import {
	ADD_BOOK,
	FETCH_ALL_BOOKS,
	FETCH_MY_BOOKS,
	REMOVE_BOOK,
	RETURN_BOOK,
	SET_BOOKS,
	SET_LOADING_STATUS, SET_MY_BOOKS
} from "./types";
import {LoadingStatus} from "../types";

export const fetchBooks = (text) => async dispatch => {
	dispatch({ type: FETCH_ALL_BOOKS })
	const { data } = await booksApi.getBooks(text)

	dispatch({ type: SET_BOOKS, payload: data })
}

export const fetchMyBooks = () => async dispatch => {
	try {
		dispatch({ type: FETCH_MY_BOOKS })
		const { data } = await booksApi.getMyBooks()

		dispatch({ type: SET_MY_BOOKS, payload: data })
	} catch (e) {
		console.log(e)
	}
}

export const removeBookById = (id) => async dispatch => {
	try {
		await booksApi.removeBookById(id)

		dispatch({ type: REMOVE_BOOK, payload: id })
	} catch (e) {
		console.log(e)
	}
}

export const addBookAction = (bookId) => async dispatch => {
	try {
		const { data } = await booksApi.addBook(bookId)

		dispatch({ type: ADD_BOOK, payload: data })
	} catch (e) {
		console.log(e)
	}
}

export const returnBookAction = (bookId) => async dispatch => {
	try {
		const { data } = await booksApi.returnBook(bookId)

		dispatch({ type: RETURN_BOOK, payload: data })
	} catch (e) {
		console.log(e)
	}
}