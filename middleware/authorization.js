const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeader = req.headers.authorization;
        let result;

        if (authorizationHeader) {
            // Get Bearer token
            const token = req.headers.authorization.split(' ')[1];
            const options = {
                company: process.env.JWT_OPTION_COMPANY,
                user: process.env.JWT_OPTION_USER
            };

            try {
                result = jwt.verify(token, process.env.JWT_SECRET, options);

                req.decoded = result;
                next();
            } catch (err) {
                res.status(403).send({
                    status: 'Forbidden',
                    error: 'Token is invalid. API request is forbidden.'
                });
            }
        } else {
            res.status(401).send({
                status: 'Unauthorized',
                error: 'Authentication error. Token required'
            });
        }
    }
};