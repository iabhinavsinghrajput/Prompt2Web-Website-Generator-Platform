import { User } from "../models/userModel.js"
import jwt from 'jsonwebtoken'

export const googleAuth = async (req, res) => {
    try {
        const { name, email, avatar } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({ name, email, avatar })
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "7d" })
        res.cookie("token", token,
            { httpOnly: true, secure: true, sameSite: "none", maxAge: 7 * 24 * 60 * 60 * 1000 })

        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            credits: user.credits,
            plan: user.plan,
            token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
export const logoutUser = async (_, res) => {
    try {
         res.clearCookie("token")
         return res.status(200).json({message:"User Logout Successfully"})
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}