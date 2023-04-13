import React from 'react';
import { Link } from "react-router-dom";

import bookCover from '../../assets/book-covers-big-2019101610.jpg'

import "./index.scss"

const BookPreview = () => {
	return (
		<div className='book-preview__wrapper'>
			<img className='book-preview_cover' src={bookCover} />
			<p className='book-preview-bold title'>Hello, my name is awesome</p>
			<p className='book-preview-bold'>Author: <span>Alexandra</span></p>
			<p className='book-preview-bold'>First Publish Year: <span>2014</span></p>
			<p className='book-preview-bold'>Booked by: <span>Aliaksei</span></p>
			<Link to='/book/123' className='book-preview-btn'>Details</Link>
		</div>
	);
}

export default BookPreview;