import { LoadingStatus } from "../types";
import {FETCH_USERS, SET_USERS, SET_LOADING_STATUS, REMOVE_USER} from "./types";

const initialState = {
	allUsers: [],
	status: LoadingStatus.NEVER
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				status: LoadingStatus.LOADING
			}

		case SET_LOADING_STATUS:
			return {
				...state,
				status: action.payload,
			}

		case REMOVE_USER:
			return {
				...state,
				allUsers: state.allUsers.filter(user => user._id !== action.payload)
			}

		case SET_USERS:
			return {
				...state,
				allUsers: action.payload,
				status: LoadingStatus.SUCCESS
			}
		default:
			return state
	}
}

export default reducer