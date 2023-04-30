import React from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import BookPicture from "../BookPicture";

import useAdmin from "../../hooks/useAdmin";
import {addBookAction, removeBookById, returnBookAction} from "../../redux/books/actionCreators";
import {selectAuthData} from "../../redux/auth/selectors";

import "./index.scss"

const BookPreview = ({ book }) => {
	const dispatch = useDispatch()
	const myId = useSelector(selectAuthData)._id
	const isAdmin = useAdmin()

	const { _id, title, author, year, viewsCount, bookedBy = 'No Owner', picture  } = book
	const isBooked = bookedBy && bookedBy !== 'No Owner'
	const fullName = isBooked ? bookedBy.fullName : 'No Owner'
	const isMyReservation = isBooked && bookedBy._id === myId && !isAdmin

	const addBook = () => {
		dispatch(addBookAction(_id))
	}

	const returnBook = () => {
		dispatch(returnBookAction(_id))
	}

	const removeBook = () => {
		dispatch(removeBookById(_id))
	}

	let addBtn = !isAdmin && (
		<button
			disabled={isBooked}
			className={`book-preview-btn add-btn btn ${isBooked ? 'disabled' : ''}`}
			onClick={addBook}
		>
			Add
		</button>
	)

	if (isMyReservation) {
		addBtn = (
			<button
				className="book-preview-btn remove-btn btn"
				onClick={returnBook}
			>
				Return the book
			</button>
		)
	}

	return (
		<div className='book-preview__wrapper'>
			<BookPicture classes='book-preview_cover' picture={picture} />
			<p className='book-preview-bold title'>{title}</p>
			<p className='book-preview-bold'>Author: <span>{author}</span></p>
			<p className='book-preview-bold'>First Publish Year: <span>{year}</span></p>
			<p className='book-preview-bold'>Views on the site: <span>{viewsCount}</span></p>
			<p className='book-preview-bold'>Booked by: <span>{fullName}</span></p>
			<Link to={`/book/${_id}`} className='book-preview-btn details-btn'>Details</Link>

			{addBtn}

			{isAdmin && (
				<button className='book-preview-btn remove-btn btn' onClick={removeBook}>Remove</button>
			)}
		</div>
	);
}

export default BookPreview;