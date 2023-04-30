import {AUTH_GET_ME, AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, SET_LOADING_STATUS} from "./types";
import {authApi} from "../../api/authApi";
import {LoadingStatus} from "../types";

export const loginAction = (values) => async dispatch => {
	try {
		const { data } = await authApi.login(values)

		if ('token' in data) {
			localStorage.setItem('token', data.token)

			dispatch({ type: AUTH_LOGIN, payload: data })
		}
	} catch (e) {
		console.log(e)
	}
}

export const logoutAction = () => async dispatch => {
	localStorage.removeItem('token')

	dispatch({ type: AUTH_LOGOUT })
}

export const registerAction = (values) => async dispatch => {
	try {
		const { data } = await authApi.register(values)

		if ('token' in data) {
			localStorage.setItem('token', data.token)

			dispatch({ type: AUTH_REGISTER, payload: data })
		}
	} catch (e) {
		console.log(e)
	}
}

export const getMeAction = () => async dispatch => {
	try {
		dispatch({ type: SET_LOADING_STATUS, payload: LoadingStatus.LOADING })
		const { data } = await authApi.getMe()

		dispatch({ type: AUTH_GET_ME, payload: data })
	} catch (e) {
		dispatch({ type: SET_LOADING_STATUS, payload: LoadingStatus.ERROR })
		console.log(e)
	}
}
