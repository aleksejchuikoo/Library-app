import jwt from 'jsonwebtoken'

export default (req, res, next) => {
	if (req.method === "OPTIONS") {
		return next();
	}

	try {
		const token = req.headers.token

		if (!token) {
			return res.status(401).json({ message: "No authorization" });
		}

		const decoded = jwt.verify(token, process.env.jwtSecretKey)

		req.userId = decoded._id
		next()
	} catch (e) {
		res.status(401).json({ message: "No authorization" });
	}
}