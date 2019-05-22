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
}
}