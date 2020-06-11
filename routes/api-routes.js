//API ROUTES
const path = require("path");
const noteTaker = require("../db/notetaker");

const fs = require('fs');
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        
        readFileAsync('./db/db.json', 'utf8').then(function(contents) {
             res.json(JSON.parse(contents));
        });

    });

    app.post("/api/notes", function(req, res) {
        new noteTaker().addNote(req.body);
        res.send("Added");
    });

    app.delete("/api/notes/:id", function(req, res) {
        new noteTaker().deleteNote(req.params.id);
        res.send("Deleted");
    });

}