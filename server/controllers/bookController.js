import BookModel from "../models/Book.js";

const getAllBooks = async (req, res) => {
	try {
		const books = await BookModel.find().populate('bookedBy').exec()

		res.json(books)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Something went wrong"
		});
	}
}

const getBook = async (req, res) => {
	try {
		const { id } = req.params

		const book = await BookModel.findById({ _id: id }).populate('bookedBy').exec()

		res.json(book)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "The book was not found"
		});
	}
}

const createBook = async (req, res) => {
	try {
		const { title, description, author, year, picture } = req.body;

		const book = new BookModel({
			title,
			description,
			author,
			year,
			picture
		})

		await book.save()

		res.status(201).json({
			...book._doc
		})
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Could not create the book"
		});
	}
}

const removeBook = async (req, res) => {
	try {
		const { id } = req.params

		await BookModel.findOneAndDelete({ _id: id })

		res.json({
			message: "The book was successfully deleted"
		})
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Could not delete the book"
		});
	}
}

const updateBook = async (req, res) => {
	try {
		const { id } = req.params

		console.log(req.body)
		await BookModel.updateOne({
			_id: id
		}, {
			...req.body
		})

		res.json({
			message: "The book was successfully updated"
		})
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Could not update the book"
		});
	}
}

export {
	getAllBooks,
	getBook,
	createBook,
	updateBook,
	removeBook
}