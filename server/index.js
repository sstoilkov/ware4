const express = require('express')
const mongoose = require('mongoose')
const app = express()

const ProductModel = require('./models/Product')

app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@crud.hvikvlh.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.get('/', async (req, res) => {
    const product = new ProductModel({
        reference: 'TM221C16R',
        name: 'M221 PLC',
        qty: 20
    })

    try {
        await product.save()
        res.send('inserted data')
    } catch (err) {
        console.log(err)
    }
})

app.listen(3001, () => {
    console.log('server is running on 3001')
})