import { body } from "express-validator";

const createBookValidation = [
	body('title', 'Enter title').exists().notEmpty(),
	body('description', 'Enter description').exists().notEmpty(),
	body('author', 'Enter author').exists().notEmpty(),
	body('year', 'Enter year').exists().notEmpty()
]

export { createBookValidation }