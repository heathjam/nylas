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

// // Here we are going to fetch the message we want to reply to
// const replyToMessage = await nylas.messages.find('{id}');
// draft.replyToMessageId = replyToMessage.id;

// We are also going to get a file to attach (Replace {id} with the appropriate id for the file to be attached)
// const file = await nylas.files.find('{id}');
// draft.files = [file];

// The following attributes can be assigned to a draft object
draft.subject = "The Nylas Challenge"
draft.body = "Hi Paul, This email was sent using the Nylas email API. Visit https://nylas.com for details."
// You can also assign draft.cc, draft.bcc, and draft.from_ in the same manner

const gmailAccount = new EmailParticipant({'email': 'paulheath10@gmail.com', 'name': 'My Nylas Friend'});
const hotmailAccount = new EmailParticipant({'email': 'paulheath10@hotmail.com', 'name': 'Your Name'});
draft.to = [gmailAccount]
draft.replyTo = [hotmailAccount]
// Note: changing from to a different email address may cause deliverability issues
draft.from = [hotmailAccount]

draft.send().then(response => {console.log(response)});