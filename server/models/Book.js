import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	year: {
		type: String,
		required: true
	},
	viewsCount: {
		type: Number,
		default: 0
	},
	picture: String,
	bookedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
}, {
	timestamps: true
})

export default mongoose.model('Book', BookSchema)