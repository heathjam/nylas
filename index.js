const Nylas = require('nylas')
require('dotenv').config()

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

const nylas = Nylas.with(process.env.ACCESS_TOKEN)

nylas.account.get().then(account => console.log(account))