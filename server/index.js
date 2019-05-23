const express = require("express");
const app = express ();
const uC = require ("./controllers/userController");
const cC = require ("./controllers/comicController")
const massive = require("massive");
const session = require("express-session")
app.use(express.json())
// const cloudinary = require('cloudinary');
require("dotenv").config();

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUnitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 *14
        }
    })
);

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("db is connected")
})

// users
app.post("/api/login", uC.login);
app.post("/api/register", uC.register);
app.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});


app.get("/api/user", (req,res) => {
    res.status(200).send(req.session.user);
});

// comics
app.get("/api/comics", cC.getAll)

app.use(express.json());
app.listen(SERVER_PORT || 4050, () => console.log (`ComicGen on ${SERVER_PORT}`))