const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        // you can map products list of objects and create a new object
        const {id, name, image} = product
        return {id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req, res) => {
    // array method returns a found attribute
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})