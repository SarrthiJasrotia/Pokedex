const express = require("express");
const app = express();

const pokemon = require("./models/pokemon.js")

//Middleware
app.use(express.urlencoded({ extended: false })); 



//INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        allPokemon: pokemon,
    })
})

//NEW

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW

//listening
app.listen(3000, () => {
    console.log("Its Working")
})