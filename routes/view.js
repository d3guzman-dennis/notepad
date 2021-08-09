
  
const path = require("path")

//pass to index.html file
module.exports = function (app) {
    //pass to notes.html file.
    app.get("./notes", (req, res) => res.sendFile(path.join(__dirname,"../public/notes.html")))
    app.get("*", (req, res) => res.sendFile(path.join(__dirname,"../public/index.html")))
}