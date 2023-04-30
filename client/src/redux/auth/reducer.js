import {LoadingStatus} from "../types";
import {AUTH_GET_ME, AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, SET_LOADING_STATUS} from "./types";

const initialState = {
	data: null,
	status: LoadingStatus.LOADING
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_LOGIN: {
			return {
				...state,
				data: action.payload,
				status: LoadingStatus.SUCCESS
			}
		}

		case AUTH_REGISTER: {
			return {
				...state,
				data: action.payload,
				status: LoadingStatus.SUCCESS
			}
		}

		case AUTH_GET_ME: {
			return {
				...state,
				data: action.payload,
				status: LoadingStatus.SUCCESS
			}
		}

		case AUTH_LOGOUT: {
			return {
				...state,
				data: null
			}
		}

		case SET_LOADING_STATUS: {
			return {
				...state,
				status: action.payload
			}
		}

		default:
			return state
	}
}

export default reducer