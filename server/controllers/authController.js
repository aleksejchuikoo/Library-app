import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserModel from '../models/User.js'

const EXPIRATION_PERIOD_30_DAYS = "30d"

const login = async (req, res) => {
	try {
		const { email, password: userPassword } = req.body;
		const user = await UserModel.findOne({ email });

		if (!user) {
			return res
				.status(400)
				.json({ message: "Invalid user name or password" });
		}

		const isMatch = await bcrypt.compare(userPassword, user.password);

		if (!isMatch) {
			return res
				.status(400)
				.json({ message: "Invalid user name or password" });
		}

		const token = jwt.sign(
			{
				_id: user._id
			},
			process.env.jwtSecretKey,
			{
				expiresIn: EXPIRATION_PERIOD_30_DAYS
			})

		const { password, ...userData } = user._doc

		res.status(201).json({
			...userData,
			token
		});
	} catch (e) {
		res.status(500).json({
			message: "Failed to log in"
		});
	}
}

const register = async (req, res) => {
	try {
		const { fullName, email, password: userPassword } = req.body;
		const candidate = await UserModel.findOne({ email })

		if (candidate) {
			return res.status(400).json({ message: "This user already exists" });
		}

		const hashedPassword = await bcrypt.hash(userPassword, 10)
		const user = new UserModel({ fullName, email, password: hashedPassword })

		await user.save()

		const token = jwt.sign(
			{
			_id: user._id
			},
			process.env.jwtSecretKey,
			{
				expiresIn: EXPIRATION_PERIOD_30_DAYS
			})

		const { password, ...userData } = user._doc

		res.status(201).json({
			...userData,
			token
		});
	} catch (e) {
		console.log(e)
		res.status(500).json({ message: "Something went wrong" });
	}
}

const authMe = async (req, res) => {
	try {
		const user = await UserModel.findById(req.userId)

		const { password, ...userData } = user._doc

		res.status(201).json(userData);
	} catch (e) {
		res.status(500).json({ message: "Something went wrong" });
	}
}

export {
	login,
	register,
	authMe
}
