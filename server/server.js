import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import authRoute from './routes/auth.routes.js'
import booksRoute from './routes/books.routes.js'

import upload from "./config/multer.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.post('/upload', upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`
	})
})

app.use('/auth', authRoute)
app.use('/books', booksRoute)

const startApp = async () => {
	try {
		await mongoose.connect(process.env.mongoURI).then(() => {
			console.log('Successful connection to the database')
		})

		app.listen(PORT, () => {
			console.log(`App has been started on port ${PORT}`)
		})
	} catch (e) {
		console.log('Server error', e.message)
		process.exit(1)
	}
}


startApp()