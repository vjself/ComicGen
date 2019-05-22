const bcrypt = require('bcrypt')
module.exports = {
    register: (req, res) => {
        console.log("Reqbody---->",req.body)
        const db = req.app.get("db")
        const { email, username, password, f_name, l_name, social, mom_m, age, gender, profile_pic} = req.body;
        db.find_users(email).then(users => {
            console.log(email)
            if (users.length) {
                res.status(200).send("That user already exists");
            } else {
                let saltRounds = 12;
                bcrypt.genSalt(saltRounds).then(salt => {
                    bcrypt.hash(password,salt).then((hashPassword) => {

                        db.create_users([email, username, hashPassword, f_name, l_name, social, mom_m, age, gender, profile_pic]).then(user => {
                            req.session.user = {
                                id: user[0].id,
                                email: user[0].email
                            };
                            res.status(200).send(req.session.user);
                        })
                    })
                })
            }
        })
    }
}