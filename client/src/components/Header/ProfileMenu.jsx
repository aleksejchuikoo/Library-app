import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {useOutside} from "../../hooks/useOutside";
import useAdmin from "../../hooks/useAdmin";

import {logoutAction} from "../../redux/auth/actionCreators";

import "./index.scss"
import {selectAuthData} from "../../redux/auth/selectors";

const ProfileMenu = () => {
	const dispatch = useDispatch()
	const {fullName, role} = useSelector(selectAuthData)
	const {ref, isShow, setIsShow} = useOutside(false)
	const isAdmin = useAdmin()

	const toggleDropdown = () => {
		setIsShow(!isShow)
	}

	const onClickLogout = () => {
		dispatch(logoutAction())
	}

	const links = isAdmin ? (
		<>
			<Link onClick={toggleDropdown} to='/create-book'>Create book</Link>
			<Link onClick={toggleDropdown} to='/users'>Users</Link>
		</>
	) : (
		<Link onClick={toggleDropdown} to='/my-books'>My books</Link>
	)

	return (
		<div className='profile__wrapper'>
			<div
				className={`profile-username ${isShow ? 'active' : ''}`}
				onClick={toggleDropdown}
			>
				<span>{`${fullName} (${role})`}</span>
			</div>
			{isShow && (
				<div className="profile__links" ref={ref}>
					{links}
					<button onClick={onClickLogout} className="logout">Sign out</button>
				</div>
			)}
		</div>
	);
}

export default ProfileMenu;