const bcrypt = require('bcrypt')
module.exports = {
    login: async (req, res) => {
        const {username, password} = req.body;
        console.log(req.body.password, "--->")
        const db = req.app.get("db")
        let find_users = await db.find_users(username);
        console.log(find_users, "Finding USers")
        if(!find_users[0]){
            res.status(200).send("Incorrect username, please try again. Turd")
        }
        let result = await bcrypt.compare(password, find_users[0].password)
        console.log(password,"passsswwoorrddd")
        if(result){
            console.log(result, "login is working")
            req.session.user = {id: find_users[0].id, username: find_users[0].username};
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send("Incorrect email/password. Try again turd nugget.")
        }
    },

    register: (req, res) => {
        console.log("Reqbody---->",req.body)
        const db = req.app.get("db")
        const { email, username, password, f_name, l_name, social, mom_m, age, gender, profile_pic} = req.body;
        db.find_users(email).then(users => {
            console.log(email,"--find email")
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