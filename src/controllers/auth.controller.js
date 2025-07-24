import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/token-generator.js';
const defaultUser = {
    email : 'daniel@gerez.com',
    password : '123456'
}        

export const login = (req, res) => {
    const userData = req.body
    if (userData.email === defaultUser.email && userData.password == defaultUser.password) {
        const token = generateToken(userData)
        res.json({ token })
    } else {
        return res.sendStatus(401)
    }

}