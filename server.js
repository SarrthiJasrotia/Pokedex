const express = require("express");
const app = express();
require("./models/pokemon.js")
const methodOverride = require("method-override")
const pokemon = require("./models/pokemon.js")

//Middleware
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"))

//INDEX
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        allPokemon: pokemon,
    })
})

//NEW
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})

//DELETE
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon")
})

//UPDATE
app.put("/pokemon/:id", (req, res) => {
    const index = req.params.id
    const pokemonD = req.body
    const stats = {}
    const type = []

    pokemon[index].name = pokemonD.name
    pokemon[index].img = pokemonD.img

    type.push(pokemonD.type)

    stats.hp = pokemonD.hp
    stats.attack = pokemonD.attack
    stats.defense = pokemonD.defense
    stats.speed = pokemonD.speed

    pokemon[index].stats = stats
    pokemon[index].type = type


    res.redirect("/pokemon")
})

//CREATE
app.post("/pokemon", (req, res) => {
    //console.log(req.body)
    const pokemonBody = req.body
    const newPoke = {}
    const stats = {}
    const type = []

    newPoke.name = pokemonBody.name
    newPoke.img = pokemonBody.img
    newPoke.stats = stats
    newPoke.type = type

    type.push(pokemonBody.type)

    stats.hp = pokemonBody.hp
    stats.attack = pokemonBody.attack
    stats.defense = pokemonBody.defense
    stats.speed = pokemonBody.speed



    pokemon.unshift(newPoke)
    res.redirect("/pokemon")
})
//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        idPokemon: pokemon[req.params.id],
        index: req.params.id
    })
})
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