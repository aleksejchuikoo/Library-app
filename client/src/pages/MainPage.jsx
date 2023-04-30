import React, {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {selectBooksData} from "../redux/books/selectors";
import {fetchBooks} from "../redux/books/actionCreators";

import MainSectionWithSearch from "../components/MainSectionWithSearch";
import BooksWrapper from "../components/BooksWrapper";

import {useDebounce} from "../hooks/useDebounce";

const MainPage = () => {
	const [searchText, setSearchText] = useState('')

	const dispatch = useDispatch()
	const books = useSelector(selectBooksData)
	const debouncedSearch = useDebounce(searchBooks, 500)

	useEffect(() => {
		searchBooks('')
	}, [])

	function searchBooks(text) {
		dispatch(fetchBooks(text))
	}

	const changeSearchText = useCallback((e) => {
		const text = e.target.value

		setSearchText(text)
		debouncedSearch(text.trim())
	}, [])

	return (
		<>
			<MainSectionWithSearch
				searchText={searchText}
				changeSearchText={changeSearchText}
			/>
			<BooksWrapper books={books}/>
		</>
	);
}

export default MainPage;