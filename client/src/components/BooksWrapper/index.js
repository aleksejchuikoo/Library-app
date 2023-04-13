import React from 'react';

import BookPreview from "../BookPreview";

import "./index.scss"

const BooksWrapper = () => {
	const emptyArr = new Array(10).fill('')

	return (
		<div className='books__wrapper container'>
			{emptyArr.map(() => (
				<BookPreview />
			))}
		</div>
	);
}

export default BooksWrapper;