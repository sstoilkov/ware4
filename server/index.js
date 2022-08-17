const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const ProductModel = require('./models/Product')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://admin:admin@crud.hvikvlh.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.post('/insert', async (req, res) => {
    const name = req.body.name
    const reference = req.body.reference
    const qty = req.body.qty

    const product = new ProductModel({
        name: name,
        reference: reference,
        qty: qty
    })

    try {
        await product.save()
        res.send('inserted data')
    } catch (err) {
        console.log(err)
    }
});

app.listen(3001, () => {
    console.log('server is running on 3001')
})