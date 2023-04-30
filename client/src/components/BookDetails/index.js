import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import BookPicture from "../BookPicture";

import useAdmin from "../../hooks/useAdmin";
import {booksApi} from "../../api/booksApi";
import {BASE_BACKEND_URL} from "../../core/constants";

import {selectAuthData} from "../../redux/auth/selectors";

import './index.scss'

const BookDetails = ({ bookData, toggleReservation }) => {
	const navigate = useNavigate()
	const myId = useSelector(selectAuthData)._id
	const isAdmin = useAdmin()

	const {title, description, author, year, picture, viewsCount, bookedBy = 'No Owner'} = bookData
	const isBooked = bookedBy && bookedBy !== 'No Owner'
	const fullName = isBooked ? bookedBy.fullName : 'No Owner'
	const isMyReservation = isBooked && bookedBy._id === myId && !isAdmin

	const removeBook = async () => {
		try {
			await booksApi.removeBookById(bookData._id)
			navigate('/')
		} catch (e) {
			console.log(e)
		}
	}

	const addBook = async () => {
		try {
			const { data } = await booksApi.addBook(bookData._id)
			toggleReservation(data)
		} catch (e) {
			console.log(e)
		}
	}

	const returnBook = async () => {
		try {
			const { data } = await booksApi.returnBook(bookData._id)
			toggleReservation(data)
		} catch (e) {
			console.log(e)
		}
	}

	let addBtn = !isAdmin && (
		<button
			disabled={isBooked}
			className={`add-btn btn ${isBooked ? 'disabled' : ''}`}
			onClick={addBook}
		>
			Add
		</button>
	)

	if (isMyReservation) {
		addBtn = (
			<button
				className="remove-btn btn"
				onClick={returnBook}
			>
				Return the book
			</button>
		)
	}

	console.log(BASE_BACKEND_URL)
	console.log(picture)

	return (
		<div className='book-details__wrapper'>
			<div className="book-details">
				<BookPicture picture={picture} classes="book-img"/>
				<div className="book-info">
					<p className='book-title'>{title}</p>
					<p>Description: <span>{description}</span></p>
					<p>Author: <span>{author}</span></p>
					<p>First Publish Year: <span>{year}</span></p>
					<p>Views on the site: <span>{viewsCount}</span></p>
					<p>Booked by: <span>{fullName}</span></p>

					{addBtn}

					{isAdmin && (
						<button onClick={removeBook} className="remove-btn btn">Remove book</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default BookDetails;