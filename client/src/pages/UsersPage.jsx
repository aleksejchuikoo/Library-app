import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Loader from "../components/UI/Loader";
import UserDetails from "../components/UserDetails";

import {fetchUsers} from "../redux/users/actionCreators";
import {selectUsersData, selectUsersStatus} from "../redux/users/selectors";
import {LoadingStatus} from "../redux/types";


import "../components/UserDetails/index.scss"

const UsersPage = () => {
	const dispatch = useDispatch()
	const users = useSelector(selectUsersData)
	const loadingUsers = useSelector(selectUsersStatus)

	const isLoading = loadingUsers === LoadingStatus.LOADING

	useEffect(() => {
		dispatch(fetchUsers())
	}, [])

	if (isLoading) {
		return <Loader />
	}

	return (
		<div className='container'>
			<p className='users-count'>Users count: <span>{users.length}</span></p>

			{users.map(({ _id, fullName, email }) => (
				<UserDetails
					key={_id}
					id={_id}
					fullName={fullName}
					email={email}
				/>
			))}
		</div>
	);
}

export default UsersPage;