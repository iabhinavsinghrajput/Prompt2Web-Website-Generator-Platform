import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

export const isAuthenticated = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if (!token && req.headers.authorization) {
            const parts = req.headers.authorization.split(' ')
            if (parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1]
            }
        }
        if (!token) {
            return res.status(400).json({
                message: "Token not found"
            })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findById(decoded.id)
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Invalid Token"
        })
    }
}