const Category = require('../models/category.model')
const Cart = require('../models/cart.model.model')

const categories = {

    async getCategoryList(req, res) {
        try {
            let result = await Category.find({});
            res.send({status: 200, "success": true, data: result})
        }
        catch (err) {
            res.send({status: 400, "success": false})
        }
    },
}

module.exports = categories
