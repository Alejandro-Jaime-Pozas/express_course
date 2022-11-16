// invoke http module from builtin node
const http = require('http')

// server needs to be able to receive a request from user, and send a response to user
const server = http.createServer((req, res) => {
    // this responds with success, content type is k, v pair of text/html or application/json
    res.writeHead(200, {'content-type': 'text/html'})
    // if you specify content type as text/html, you can insert html elements w res.write()
    res.write('<h1>home page</h1>')
    res.end()
})

// server needs a port where it listens to the req, res
// this is a communication endpoint
// the number is arbitrary, you can use anything over 1024...but you do need it to access the application
server.listen(5000)
