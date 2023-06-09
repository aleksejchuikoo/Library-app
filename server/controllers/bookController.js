import BookModel from "../models/Book.js";

const getAllBooks = async (req, res) => {
	const { title } = req.query
	const regex = new RegExp(title, "i");

	try {
		const books = await BookModel.find({
			title: {
				$regex: regex
			}
		}).lean().populate('bookedBy', 'fullName').exec()

		res.json(books)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Something went wrong"
		});
	}
}

const getMyBooks = async (req, res) => {
	const books = await BookModel.find({ bookedBy: {
			_id: req.userId
		}
	}).populate('bookedBy').exec()

	return res.json(books)
}

const getBook = async (req, res) => {
	try {
		const { id } = req.params

		const book = await BookModel.findOneAndUpdate({
			_id: id
		}, {
			$inc: {
				viewsCount: 1
			}
		}, {
			returnDocument: 'after'
		}).populate('bookedBy').exec()

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

const addBook = async (req, res) => {
	try {
		const { bookId } = req.body

		const book = await BookModel.findOneAndUpdate({
			_id: bookId
		}, {
			bookedBy: req.userId
		}, {
			returnDocument: 'after'
		}).lean().populate('bookedBy', 'fullName').exec()

		return res.json(book)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Could not update the book"
		});
	}
}

const returnBook = async (req, res) => {
	try {
		const { bookId } = req.body

		const book = await BookModel.findOneAndUpdate({
			_id: bookId
		}, {
			bookedBy: null
		}, {
			returnDocument: 'after'
		})

		return res.json(book)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Could not update the book"
		});
	}
}

export {
	getAllBooks,
	getMyBooks,
	getBook,
	createBook,
	updateBook,
	removeBook,
	addBook,
	returnBook
}