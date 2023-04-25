// import app from 'express'
const express = require('express')
const {products} = require("./app/routes/products");
const app = express()

app.get('/', products)

app.listen(5000, () => {
    console.log('server running')
})