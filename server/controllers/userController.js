const bcrypt = require('bcrypt')
module.exports = {
    register: (req, res) => {
        const db = req.app.get("db")
        const { email, username, password, f_name, l_name, social, mom_m, about, age, gender, profile_pic} = req.body;
        db.find_users(email).then(users => {
            if (users.length) {
                console.log(users, "it exists")
                res.status(200).send("That user already exists");
            } else {
                let saltRounds = 12;
                bcrypt.genSalt(saltRounds).then(salt => {
                    bcrypt.hash(password,salt).then((hashPassword) => {

                        db.create_users([email, username, hashPassword, f_name, l_name, social, mom_m, about, age, gender, profile_pic]).then(users => {
                            console.log (users, "create_users")
                            req.session.users = {
                                id: users[0].id,
                                email: users[0].email
                            };
                            res.status(200).send(req.session.users);
                        })
                    })
                })
            }
        })
    }
}