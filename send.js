const Nylas = require('nylas')
const { default: Draft } = require('nylas/lib/models/draft')
const { default: EmailParticipant } = require('nylas/lib/models/email-participant')
const { Label } = require('nylas/lib/models/folder')
require('dotenv').config()

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

const nylas = Nylas.with(process.env.ACCESS_TOKEN)

// Create an empty draft object
const draft = new Draft(nylas)
draft.subject = "The Nylas Challenge"
draft.body = "Hi Paul, This email was sent using the Nylas email API. Visit https://nylas.com for details."

const gmailAccount = new EmailParticipant({'email': 'paulheath10@gmail.com', 'name': 'My Nylas Friend'})
const hotmailAccount = new EmailParticipant({'email': 'paulheath10@hotmail.com', 'name': 'Your Name'})

draft.to = [gmailAccount]
draft.replyTo = [hotmailAccount]
draft.from = [hotmailAccount]

draft.send().then(response => {console.log(response)})