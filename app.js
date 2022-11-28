const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        // you can map the products list of objects and create a new object
        const {id, name, image} = product
        return {id, name, image }
    })
    // return a json response of an object
    // you should use return before res.<something> if it is conditional, if it's the last part of code no need for return
    return res.json(newProducts)
})

// get a single product id by input specified by user request
// /:productID the colon refers to the user's variable input
app.get('/api/products/:productID', (req, res) => {
    console.log(req.params)
    const { productID } = req.params
    // .find array method returns a found attribute
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
        )
        // if there is no product found,
        if (!singleProduct){
            return res.status(404).send('Product does not exist')
        }
    res.json(singleProduct)
})

// get example to explain how placeholders work ie. <:productID>
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world')
})

// get a user query input for a product search, limit, and return limited search items
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products] // this creates a copy of products list

    // if user inputs search param, return products starting w search term str
    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search)
        })
    }
    // if user inputs limit param, return list of items based on the limit
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search')
        return res.status(200).json({success: true, data: []})
    }
    res.status(200).json(sortedProducts)

    // res.send('hello world 2')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})