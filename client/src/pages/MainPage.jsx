import React from 'react';

import MainSectionWithSearch from "../components/MainSectionWithSearch";
import BooksWrapper from "../components/BooksWrapper";

const MainPage = (props) => {
	return (
		<>
			<MainSectionWithSearch />
			<BooksWrapper />
		</>
	);
}

export default MainPage;