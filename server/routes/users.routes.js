import { Router } from 'express'

import {BooksController, UsersController} from '../controllers/index.js'

const router = Router()

router.get('/', UsersController.getAllUsers)
router.delete('/:id', UsersController.removeUser)

export default router