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
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
       idPokemon: pokemon[req.params.id]
    })
})
//listening
app.listen(3000, () => {
    console.log("Its Working")
})