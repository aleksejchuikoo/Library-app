import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import PictureLoading from "../PictureLoading";

import {booksApi} from "../../api/booksApi";

import './index.scss'

const CreateBookForm = () => {
	const navigate = useNavigate()
	const [previewPhoto, setPreviewPhoto] = useState(null)
	const [photoAsFile, setPhotoAsFile] = useState(null)

	const [data, setData] = useState({
		title: "",
		description: "",
		author: "",
		year: ""
	})

	const handleData = (e) => {
		const { name, value } = e.target

		setData(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const submitHandler = async (e) => {
		e.preventDefault()

		try {
			const formData = new FormData()
			formData.append('image', photoAsFile)

			const { data: imageData } = await booksApi.uploadBookCover(formData)
			const picture = imageData.url

			const { data: bookData } = await booksApi.createBook({ ...data, picture })

			console.log(bookData)
			setData({
				title: "",
				description: "",
				author: "",
				year: ""
			})
			setPreviewPhoto(null)
			setPhotoAsFile(null)

			navigate(`/book/${bookData._id}`)
		} catch (e) {
			console.warn(e)
		}
	}

	return (
		<div className='create-book-form__wrapper'>
			<p className="create-book-form_title">Create book</p>

			<div className="create-book__wrapper">
				<PictureLoading
					setPreviewPhoto={setPreviewPhoto}
					previewPhoto={previewPhoto}
					setPhotoAsFile={setPhotoAsFile}
				/>

				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Title"
						name="title"
						value={data.title}
						onChange={handleData}
					/>
					<textarea
						placeholder="Description"
						rows={6}
						name="description"
						value={data.description}
						onChange={handleData}
					/>
					<input
						type="text"
						placeholder="Author"
						name="author"
						value={data.author}
						onChange={handleData}
					/>
					<input
						type="text"
						placeholder="Year"
						name="year"
						value={data.year}
						onChange={handleData}
					/>
					<button type="submit" className="add-btn btn">Create</button>
				</form>
			</div>
		</div>
	);
}

export default CreateBookForm;