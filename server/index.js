const express = require("express");
const app = express ();
const uC = require ("./controllers/userController");
const massive = require("massive");
const session = require("express-session")
// const cloudinary = require('cloudinary');
require("dotenv").config();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// app.use(
//     session({
//         secret: SESSION_SECRET,
//         resave: false,
//         saveUnitialized: false,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24 *14
//         }
//     })
// );

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("db is connected")
})

// users
app.post("/api/signin",);
app.post("/api/register", uC.register);
app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});
app.put("/api/users", (req,res) => {
    res.status(200).send(req.session.user);
});

app.get("/api/users", (req,res) => {
    res.status(200).send(req.session.user)
});

// comics


app.use(express.json());
app.listen(SERVER_PORT || 4050, () => console.log (`ComicGen on ${SERVER_PORT}`))