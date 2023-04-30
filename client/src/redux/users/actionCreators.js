import { usersApi } from "../../api/usersApi";
import {FETCH_USERS, REMOVE_USER, SET_USERS} from "./types";

export const fetchUsers = () => async dispatch => {
	dispatch({ type: FETCH_USERS })
	const { data } = await usersApi.getUsers()

	dispatch({ type: SET_USERS, payload: data })
}

export const removeUser = (id) => async dispatch => {
	try {
		await usersApi.removeUser(id)
		dispatch({ type: REMOVE_USER, payload: id })
	} catch (e) {
		console.log(e)
	}
}