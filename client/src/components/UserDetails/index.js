import React from 'react';
import {useDispatch} from "react-redux";

import {removeUser as removeUserById} from "../../redux/users/actionCreators";

import './index.scss'

const UserDetails = ({ id, fullName, email }) => {
	const dispatch = useDispatch()

	const removeUser = () => {
		dispatch(removeUserById(id))
	}

	return (
		<div className='user-details__wrapper'>
			<div className='users__wrapper'>
				<div className="user-column"><span>Full Name:</span> {fullName}</div>
				<div className="user-column"><span>email:</span> {email}</div>
			</div>
			<button onClick={removeUser} className="remove-btn btn">Remove</button>
		</div>
	);
}

export default UserDetails;