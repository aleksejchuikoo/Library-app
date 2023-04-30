import { body } from "express-validator";

const createBookValidation = [
	body('title', 'Enter title').exists().notEmpty(),
	body('description', 'Enter description').exists().notEmpty(),
	body('author', 'Enter author').exists().notEmpty(),
	body('year', 'Enter year').exists().notEmpty()
]

const updateBookValidation = [
	body('title', 'Enter title').optional().notEmpty(),
	body('description', 'Enter description').optional().notEmpty(),
	body('author', 'Enter author').optional().notEmpty(),
	body('year', 'Enter year').optional().notEmpty()
]

export {
	createBookValidation,
	updateBookValidation
}