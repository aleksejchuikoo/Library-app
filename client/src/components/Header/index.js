import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import ProfileMenu from "./ProfileMenu";
import {selectAuthData} from "../../redux/auth/selectors";

import bookIcon from '../../assets/book.png'

import "./index.scss"

const Header = () => {
	const navigate = useNavigate()
	const isAuth = useSelector(selectAuthData)

	const navigateToMainPage = () => {
		navigate('/')
	}

	return (
		<header className='header container'>
			<div onClick={navigateToMainPage} className='header_logo'>
				<img className='logo' src={bookIcon} alt='Book icon' />
				<span className='logo_text'>LibraryHub</span>
			</div>

			{isAuth && <ProfileMenu />}
		</header>
	);
}

export default Header;