import React from 'react';

import {BASE_BACKEND_URL} from "../../core/constants";
import defaultPicture from '../../assets/defaultImage.jpeg'

const BookPicture = ({ picture, classes }) => {
	const image = picture ? `${BASE_BACKEND_URL}${picture}` : defaultPicture

	return (
		<img className={classes} src={image} alt="Default Picture"/>
	);
}

export default BookPicture;