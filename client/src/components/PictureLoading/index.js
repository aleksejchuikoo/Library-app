import React from 'react';

import defaultImg from "../../assets/defaultImage.jpeg"
import addBtn from "../../assets/add-button-svg.svg"

import getBase64 from "../../utils/getBase64";

import "./index.scss"

const PictureLoading = ({ previewPhoto, setPhotoAsFile, setPreviewPhoto }) => {
	const uploadImage = async (e) => {
		try {
			const file = e.target.files[0]

			const photoInBase64 = await getBase64(file)

			setPhotoAsFile(file)
			setPreviewPhoto(photoInBase64)
		} catch (e) {
			console.log(e)
		}
	}

	const removePreviewImage = () => {
		setPhotoAsFile(null)
		setPreviewPhoto(null)
	}

	return (
		<div className="picture_block">
			<img src={previewPhoto ?? defaultImg} className="uploaded_picture" alt="Uploaded image"/>
			<div className="upload-btn__wrapper">
				<label htmlFor="upload" className="upload-btn">
					<img src={addBtn} alt="Add button"/>
					<span>Upload</span>
					<input
						accept="image/*"
						type="file"
						id="upload"
						onChange={uploadImage}
						hidden
					/>
				</label>
			</div>
			{previewPhoto && (
				<button onClick={removePreviewImage} className="remove-img remove-btn">Remove</button>
			)}
		</div>
	);
}

export default PictureLoading;