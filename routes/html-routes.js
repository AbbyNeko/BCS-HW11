//HTML ROUTES
const path = require("path");

module.exports = function(app) {

    //navigate to notes.html
    app.get("/notes", function(req, res) {
        //console.log(path.join(__dirname, '../public/notes.html'));
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

     //if no matching route, default to index.html
     //ADD THIS ROUTE LAST
     app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}