import React from 'react';

import ProfileMenu from "./ProfileMenu";

import bookIcon from '../../assets/book.png'

import "./index.scss"

const Header = () => {
	return (
		<header className='header container'>
			<div className='header_logo'>
				<img className='logo' src={bookIcon} />
				<span className='logo_text'>LibraryHub</span>
			</div>

			<ProfileMenu />
		</header>
	);
}

export default Header;