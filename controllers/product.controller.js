const Product = require('../models/product.model')

const product = {

    async getProductList(req, res) {
        try {
            let result = await Product.find({});
            res.send({status: 200, "success": true, data: result})
        }
        catch (err) {
            res.send({status: 400, "success": false})
        }
    },
    async search(req, res) {
        try {
            let result = await Product.find({category: req.query.category});

            res.send({status: 200, "success": true, data: result})
        }
        catch (err) {
            res.send({status: 400, "success": true})
        }
    }
}

module.exports = product
