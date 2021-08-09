const express = require("express")
const app = express()


//listening environment
const PORT = process.env.PORT || 3000

//assets
app.use(express.static(__dirname + './public'));

//parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

require("./routes/api")(app);
require("./routes/view")(app);


//port 
app.listen(PORT, () => {
    console.log(`PORT Listening ON ${PORT}`)
})