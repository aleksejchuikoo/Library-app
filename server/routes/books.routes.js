import { Router } from 'express'

import { BooksController } from '../controllers/index.js'
import { createBookValidation, updateBookValidation } from "../validations/bookValidation.js";

import { errorsMiddleware } from '../middlewares/index.js'
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/', BooksController.getAllBooks)
router.get('/my', authMiddleware, BooksController.getMyBooks)
router.get('/:id', BooksController.getBook)
router.delete('/:id', BooksController.removeBook)
router.patch('/:id', updateBookValidation, errorsMiddleware, BooksController.updateBook)
router.post('/', createBookValidation, errorsMiddleware, BooksController.createBook)
router.post('/add', authMiddleware, BooksController.addBook)
router.post('/return', authMiddleware, BooksController.returnBook)

export default router