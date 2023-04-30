import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Loader from "../components/UI/Loader";
import BookDetails from "../components/BookDetails";

import {booksApi} from "../api/booksApi";

const BookPage = () => {
	const [bookData, setBookData] = useState()
	const [isLoading, setIsLoading] = useState(true)

	const { id } = useParams()

	useEffect(() => {
		booksApi.getBookById(id)
			.then(({ data }) => {
				setIsLoading(false)
				setBookData(data)
			}).catch(err => {
			console.error(err)
		})
	}, [])

	const toggleReservation = (newData) => {
		setBookData(newData)
	}

	if (isLoading) {
		return <Loader/>
	}

	return (
		<div className='book_page__wrapper container'>
			<BookDetails
				toggleReservation={toggleReservation}
				bookData={bookData}
			/>
		</div>
	);
}

export default BookPage;