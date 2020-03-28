const bcrypt = require('bcryptjs');
const passport = require('passport');
// const admin = require('../firebase');
//
// const db = admin.firestore();
// db.settings({
//     timestampsInSnapshots: true
// });

module.exports = {
    register: async (req, res) => {
        const { name, email, password } = req.body;

        let hashPassword = '';

        try {
            bcrypt.genSalt(10, async(err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) {
                        res.status(400).send({
                            success: 'false',
                            message: 'password hash error',
                        })
                    } else {
                        hashPassword = password;
                    }
                });
            });
            // const userRef = db.collection("users").add({
            //     name: name,
            //     email: email,
            //     password: hashPassword
            // });
        } catch (err) {
            res.status(400).send(err);
        }
    },

    login: async (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                res.status(400).send(err);
            } else if (!user) {
                res.status(400).send({
                    success: 'false',
                    message: 'username or password is incorrect'
                })
            } else {
                //token generation
                const secret = process.env.JWT_SECRET;
                const option = {
                    userId: user.id
                };
                const token = jwt.sign(option, secret);

                res.status(200).send({
                    user: user,
                    token: token
                });
            }
        })(req, res, next);
    }
};
