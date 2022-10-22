const PORT = process.env.PORT || 8000

const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors())

const classApi = require('./api.js')
const objApi = new classApi()

app.get('/', (req , res ) => {
    res.json('Welcome to my api')
})

app.get('/get-cible/:nom', (req, res) => {
    const cible = req.params.nom
    const tab = objApi.getParCible(cible)
    res.json(tab)
})

app.get('/get-partie-du-corps/:nom', (req , res ) => {
    const partieCorps = req.params.nom
    const tab = objApi.getParPartieCorps(partieCorps)
    res.json(tab)
})

app.get('/get-id/:identifiant', (req , res ) => {
    const id = req.params.identifiant
    const reponse = objApi.getParId(id)
    res.json(reponse)
})

app.get('/get-nom/:nom', (req , res ) => {
    const nom = req.params.nom
    const reponse = objApi.getParNom(nom)
    res.json(reponse)
})

app.get('/get-equipement/:nom', (req , res ) => {
    const equipement = req.params.nom
    const reponse = objApi.getParEquipement(equipement)
    res.json(reponse)
})

app.get('/get-tous', (req, res) => {
    const reponse = objApi.getTous()
    res.json(reponse)
})

app.get('/get-tous-equipement', (req, res) => {
    const reponse = objApi.getTousEquipement()
    res.json(reponse)
})

app.get('/get-tous-partie-du-corps', (req, res) => {
    const reponse = objApi.getTousPartieDuCorps()
    res.json(reponse)
})

app.get('/get-tous-muscles', (req, res) => {
    const reponse = objApi.getTousMuscles()
    res.json(reponse)
})

app.listen(PORT, () => console.log('server turn on PORT : ' + PORT))
