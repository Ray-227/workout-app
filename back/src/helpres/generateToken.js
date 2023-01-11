import jwt from 'jsonwebtoken'


const generateToken = userId => jwt.sign({ userId }, process.env.ACCESS_TOKEN, { expiresIn: '10d' })

export default generateToken