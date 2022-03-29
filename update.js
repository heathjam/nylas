const Nylas = require('nylas')
require('dotenv').config()

Nylas.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
})

const nylas = Nylas.with(process.env.ACCESS_TOKEN)

const MESSAGE_ID = 'd1g589jb3ploi8c47rb3fm1fo'
const LABEL_ID = 'ca72ddd9jermves19wf55g2ev'

// we happen to know the id of the message from before 
nylas.messages.find(MESSAGE_ID).then(message => {

    // add a label to a message
    nylas.labels.find(LABEL_ID).then(label => {

        // add the label to the email
        message.labels.push(label)

        // save the email
        message.save().then(response => {console.log(response)})

    })

  })