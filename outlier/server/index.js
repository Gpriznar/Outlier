// npm packages
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const dbFunctions = require('./database/functions')

const PORT = 5000
app.use(cors())
app.use(bodyParser.json())


app.post('/signIn', (req,res) => {
    let email = req.body.email
    let password = req.body.password

    dbFunctions.creators.getUserId(email, password)
    .then(id => res.json({userId: id}))
    .catch(() => {res.status(500).json({error: "Invalid email and password."})})
})

app.post('/register', (req,res) => {
    console.log(req.body)
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let password = req.body.password
    let phoneNumber = req.body.phoneNumber

    dbFunctions.creators.emailTaken(email)
    .then(emailTaken => {
        console.log('email taken', emailTaken)
        if(emailTaken){
            res.status(500).json({error: "Email already in use."})
        }
        else {
            dbFunctions.creators.addNewUser(firstName, lastName, email, password, phoneNumber)
            .then(id => res.json({userId: id}))
            .catch(error => res.status(500).json({error: error}))
        }
    })
})

app.listen(PORT,() => {
    console.log("server is running...")
})