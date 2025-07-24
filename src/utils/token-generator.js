import jwt from 'jsonwebtoken'
import 'dotenv/config'


export const generateToken = (userData)=>{
    const user= { id : 1 } // ID de un usuario default para ver en el pauload, porque no llegamos a verlo desde la DB
    const payload = user
    const expiration = { expiresIn : '1h'}
    const token = jwt.sign(payload,process.env.JWT_SECRET_KEY, expiration)

    return token
}