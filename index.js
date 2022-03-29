const Nylas = require('nylas')
const { Label } = require('nylas/lib/models/folder')
require('dotenv').config()

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

const nylas = Nylas.with(process.env.ACCESS_TOKEN)

// output for authentication
// nylas.account.get().then(account => console.log(account))

// const label = new Label(nylas)

// label.displayName = 'nylas_challenge'
// label.save()

// nylas.labels.list().then(labels => console.log(labels))