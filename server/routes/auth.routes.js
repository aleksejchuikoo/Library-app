import { Router } from "express";

import { AuthController } from '../controllers/index.js'
import { loginValidation, registerValidation } from "../validations/authValidation.js";

import { authMiddleware, errorsMiddleware } from '../middlewares/index.js'

const router = Router();

router.post("/login", loginValidation, errorsMiddleware, AuthController.login);
router.post("/register", registerValidation, errorsMiddleware, AuthController.register);
router.get("/me", authMiddleware, AuthController.authMe);

export default router