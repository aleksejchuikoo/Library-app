import UserModel from "../models/User.js";

const getAllUsers = async (req, res) => {
	try {
		const books = await UserModel.find({
			role: {
				$ne: 'admin'
			}
		})

		res.json(books)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Something went wrong"
		});
	}
}

const removeUser = async (req, res) => {
	try {
		const { id } = req.params

		await UserModel.findOneAndDelete({ _id: id })

		res.json({
			message: "The user was successfully deleted"
		})
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: "Something went wrong"
		});
	}
}

export {
	getAllUsers,
	removeUser
}