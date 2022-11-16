// invoke http module from builtin node
const http = require('http')
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./index2.html')

// server needs to be able to receive a request from user, and send a response to user
const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url
    // home page
    if (url === '/'){
        // writeHead() responds with success, content type is k, v pair of text/html or application/json
        res.writeHead(200, { 'content-type': 'text/html' })
        // if you specify content type as text/html, you can insert html elements w res.write()
        res.write(homePage)
        res.end()
    }
    // about page
    else if (url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>about page</h1>')
        res.end()
    } 
    // 404 error page
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

// server needs a port where it listens to the req, res
// this is a communication endpoint
// the number is arbitrary, you can use anything over 1024...but you do need it to access the application
server.listen(5000)
