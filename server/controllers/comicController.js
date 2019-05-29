module.exports = {
getAll: (req, res) => {
    const db = req.app.get("db");

    db.get_all().then(comic =>{
        console.log(comic);
        res.status(200).json(comic)
    })
    .catch(err => console.log(err.detail));

},
saveComic: (req, res) => {
    const db = req.app.get("db");
    const {title, comic, id} = req.body;
    db.save_comic([title, comic, id])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Error saving comic")
    })
},

comicByUser(req, res) {
    const db = req.app.get('db');
    const { username } = req.body;
    db.comic_join().then(comics => {
        console.log(comics)
        res.status(200).send(comics)
    })
    .catch(err => {
        res.status(500).send({
            message: "An error has occured on comicByUser"
        })
    })
},

upload: (req, res) => {
    const db = req.app.get("db");
    const { comic, id } = req.body;
    db.upload_comic([comic, id])
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("error at upload")
    })
},

getOne: (req,res) => {
    const db = req.app.get("db")
    console.log(req.session, "GetOne")
    db.get_one(req.session.users.id).then( comic => {
        console.log(comic, "Comic LABEL");
        res.status(200).json(comic);
    })
    .catch(err => console.log(err))
}
}