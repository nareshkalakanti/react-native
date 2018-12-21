function login(req, res, callback) {
    User.findOne({email: req.body.email}, function(err, user) { //async fun
        if (err) return callback(err) // if there is error handle

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return callback(err)
            if (!isMatch) return res.status(401).send('Incorrect password')

            // add relevant data to token
            const payload = {id: user._id, email: user.email}

            jwt.sign(payload, config.secret, {}, function(err, token) {
                if (err) return callback(err)

                user.token = token
                user.save((err) => {
                    if (err) return callback(err)
                    res.json({token})
                })
            })
        })
    })  //call back hell : fix it with Promise in JS
}