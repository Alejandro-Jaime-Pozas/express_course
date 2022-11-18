const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
// express.static() specifies all the static resources needed for app to function (imgs, css, etc)
// express takes care of setting up the file paths, MIME types, content type, etc mentioned in 01-http file
// you have to manually create the public folder at same level
app.use(express.static('./public'))

// // get the home page request and respond with the index.html file
// app.get('/', (req, res) => {
//     // resolve takes in two strings, left one is <from> and right one is <to>
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     // adding to static assets
//     // SSR (server side rendering)
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})


app.listen(5000, () => {
    console.log('server is listening on port 5000');
})