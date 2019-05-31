const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uC = require("./controllers/userController");
const cC = require("./controllers/comicController");
const massive = require("massive");
const session = require("express-session");
app.use(express.json());
const cloudinary = require("cloudinary");
require("dotenv").config();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("db is connected");
});

// users
app.post("/api/login", uC.login);
app.post("/api/register", uC.register);
app.post("/api/logout", (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

app.get("/api/user", (req, res) => {
  res.status(200).send(req.session.user);
});

// comics
app.get("/api/comics", cC.getAll);
app.get("/api/community", cC.comicByUser);
app.post("/api/comic", cC.upload);

//
app.post("/api/user/comic", cC.postComic);

// cloudinary

app.get("/api/upload", (req, res) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const api_secret = process.env.CLOUDINARY_SECRET_API;
  const signature = cloudinary.utils.api_sign_request(
    { timestamp: timestamp },
    api_secret
  );

  const payload = {
    signature: signature,
    timestamp: timestamp
  };

  res.json(payload);
});
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.use(bodyParser.json());
app.use(express.json());
app.listen(SERVER_PORT || 4050, () =>
  console.log(`ComicGen on ${SERVER_PORT}`)
);
