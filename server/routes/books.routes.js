import { Router } from 'express'

import { BooksController } from '../controllers/index.js'
import { createBookValidation } from "../validations/bookValidation.js";

import { errorsMiddleware } from '../middlewares/index.js'

const router = Router()

router.get('/', BooksController.getAllBooks)
router.get('/:id', BooksController.getBook)
router.delete('/:id', BooksController.removeBook)
router.patch('/:id', createBookValidation, errorsMiddleware, BooksController.updateBook)
router.post('/', createBookValidation, errorsMiddleware, BooksController.createBook)

export default router