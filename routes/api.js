
const fs = require("fs")
const { v4: uuid } = require('uuid')
const path = require("path")


module.exports = function(app){
app.get("./api/notes", (req, res) => res.sendFile(path.join(__dirname, "../db/db.json")))

 //adding user input notes
 app.post("./api/notes", (req, res) => {
     let newNote ={
         //generating unique id for each note
         id:uuid(),
         title:req.body.title,
         text:req.body.text
     };
     let prevNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
     prevNote.push(newNote)
     fs.writeFileSync("./db/db.json",JSON.stringify(prevNote))
     res.json(prevNote)
 })

 
 //querying for a note to delete.
 app.delete("./api/notes/:id", (req, res) => {
     let choosen = req.params.id
     let prevNote =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8"))
     const newNote =prevNote.filter(prevNote=>prevNote.id != choosen)
     fs.writeFileSync("./db/db.json",JSON.stringify(newNote))
     res.send(newNote)
 })
}