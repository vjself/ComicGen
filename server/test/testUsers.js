module.exports = {
    getAllUsers(db){
        return db.query("select * from users");
    },
    addUser(db, newUser){
        return db.query(
            "insert into users(email, username, password, f_name, l_name, social, mom_m, age, gender, profile_pic)VALUES (${email}, ${username}, ${password}, ${f_name}, ${l_name}, ${social}, ${mom_m}, ${age}, ${gender}, ${profile_pic}) RETURNING *",
            {
                email: newUser.email,
                username: newUser.username,
                password: newUser.password,
                f_name: newUser.f_name,
                l_name: newUser.l_name,
                social: newUser.social,
                mom_m: newUser.mom_m,
                age: newUser.age,
                gender: newUser.gender,
                profile_pic: newUser.profile_pic
            }
        )
    }
}