import { combineReducers } from 'redux'

import booksReducer from "./books/reducer";
import usersReducer from "./users/reducer";
import authReducer from "./auth/reducer";

export const rootReducer = combineReducers({
	books: booksReducer,
	users: usersReducer,
	auth: authReducer
})

