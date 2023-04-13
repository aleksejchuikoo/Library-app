import { body } from "express-validator";

const loginValidation = [
	body('email', 'Incorrect email').isEmail(),
	body('password', 'Enter password').exists().notEmpty()
]

const registerValidation = [
	body('email', 'Incorrect email').isEmail(),
	body('password', 'Minimum password length 6 characters').isLength({
		min: 6
	})
]

export {
	loginValidation,
	registerValidation
}