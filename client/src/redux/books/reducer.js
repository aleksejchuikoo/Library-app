import { LoadingStatus } from "../types";
import {
	ADD_BOOK,
	FETCH_ALL_BOOKS,
	FETCH_MY_BOOKS,
	REMOVE_BOOK,
	RETURN_BOOK,
	SET_BOOKS,
	SET_LOADING_STATUS, SET_MY_BOOKS
} from "./types";

const initialState = {
	allBooks: [],
	myBooks: [],
	status: LoadingStatus.NEVER,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL_BOOKS:
			return {
				...state,
				status: LoadingStatus.LOADING
			}

		case FETCH_MY_BOOKS:
			return {
				...state,
				status: LoadingStatus.LOADING
			}

		case SET_LOADING_STATUS:
			return {
				...state,
				status: action.payload,
			}

		case SET_BOOKS: {
			return {
				...state,
				allBooks: action.payload,
				status: LoadingStatus.SUCCESS
			}
		}

		case SET_MY_BOOKS: {
			return {
				...state,
				myBooks: action.payload,
				status: LoadingStatus.SUCCESS
			}
		}

		case REMOVE_BOOK: {
			return {
				...state,
				allBooks: state.allBooks.filter(book => book._id !== action.payload)
			}
		}

		case ADD_BOOK: {
			return {
				...state,
				allBooks: state.allBooks.map(book => {
					if (book._id === action.payload._id) {
						return action.payload
					}

					return book
				})
			}
		}

		case RETURN_BOOK: {
			return {
				...state,
				allBooks: state.allBooks.map(book => {
					if (book._id === action.payload._id) {
						return action.payload
					}

					return book
				}),
				myBooks: state.myBooks.filter(book => book._id !== action.payload._id)
			}
		}

		default:
			return state
	}
}

export default reducer