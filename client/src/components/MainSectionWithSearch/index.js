import React from 'react';

import searchSvg from '../../assets/icons8-search.svg'
import "./index.scss"

const MainSectionWithSearch = ({ searchText, changeSearchText }) => {
	return (
		<div className='main__section'>
			<div className='main__section-info'>
				<div className='main__section_title'>Find your book of choice</div>
				<div className='main__section_desc'>One of the largest and most authoritative collections of online journals, books, and research resources, covering life, health, social, and physical sciences.</div>
				<div className='main__section_search'>
					<input
						className='main__section_search-input'
						type='text'
						placeholder='Find your book'
						onChange={changeSearchText}
						value={searchText}
					/>
					<img className='search-icon' src={searchSvg} alt='Search icon' />
				</div>
			</div>
		</div>
	);
}

export default MainSectionWithSearch;