const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');


router.post('/login', (req, res, next) => {


    const { username, password } = req.body;

    User.findOne({ username: username })
        .then(userFromDB => {
            if (userFromDB === null) {
                res.status(400).json({ message: 'Incorrect username or password' })
            }
            if (bcrypt.compareSync(password, userFromDB.password)) {
                req.session.user = userFromDB;
                res.status(200).json(userFromDB);
            } else {
                res.status(400).json({ message: 'incorrect username or password' })
            }
        })
})


router.post('/signup', (req, res, next) => {

    const { username, password } = req.body
    if (password.length < 4) {
        res.status(400).json({ message: 'Your password should be longer than 4 characters!' })
        return;
    }

    if (username.length === 0) {
        res.status(400).json({ message: 'Username cannot be empty' })
        return;
    }

    User.findOne({ username: username })
        .then(userFromDb => {
            if (userFromDb !== null) {
                res.status(400).json({ message: 'Username is already taken' })
            } else {
                const salt = bcrypt.genSaltSync();
                const hash = bcrypt.hashSync(password, salt);

                User.create({ username: username, password: hash })
                    .then(createdUser => {
                        console.log(createdUser)
                        req.session.user = createdUser;
                        res.status(200).json(createdUser)
                    })
                    .catch(err => next(err));
            }
        })
});


router.get('/loggedin', (req, res, next) => {
    console.log("User is", req.session.user)
    const user = req.session.user
    res.json(user);
});

router.delete('/logout', (req, res, next) => {
    req.session.destroy();
    res.status(200).json({ message: "Logged out" })
});


module.exports = router