const jwt = require("jsonwebtoken");
const User = require('../models/User')
const sign = "test";
module.exports = async function (req, res, next) {
    try {
        const tokenData =  jwt.verify(req.cookies.token, sign);
        const user = await User.findOne({ _id: tokenData.id });
        if (!user) {
            res.send({ error: 'Authenticated user not found' })
            return;
        }
        req.user = user;

        next();
    } catch (e) {
        res.send({ error: e.message || 'Token error' })
    }

}