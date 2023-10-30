const jwt = require("jsonwebtoken")
const checkTokenMiddleware = async (req, res, next) => {

    try {
        const token = req.headers.token;

        if (!token) {
            return res.status(401).send({ message: "token is missed" })
        }
        const {role, userId} = jwt.verify(token, "GOODarzi@!^)2309")
        req.role=role
        req.userId=userId
        next()
        // next(null, role);???????????????
    } catch (error) {
        return res.status(403).send({ message: error.message })
    }


}

const checkAdminMiddleware = async (req, res, next) => {

    try {
        const role = req.role;  
        if (!role) {
            return res.status(403).send({ message: "forbidden" })
        }

        next()
    } catch (error) {

        return res.status(500).send({ message: error.message })
    }


}

module.exports = { checkTokenMiddleware, checkAdminMiddleware }