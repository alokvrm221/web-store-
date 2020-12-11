const User = require('../models/users.model')
const Cart = require('../models/cart.model')
const Product = require('../models/product.model')


const users = {

    async login(req, res) {
        try {

            let {email, password} = req.body;

            let user = await User.findOne({email: email});

            if (!user) {
                return res.send({'message': "USER_NOT_FOUND", status: "404",});
            }

            let matchPassword = await user.comparePassword(password);

            if (!matchPassword) {
                return res.send({'message': "ACCESS_DENIED"});
            }

            res.send({status: 200, "success": true})
        }
        catch (err) {
            res.send({status: 400, "success": false})
        }

    },

    async addProductToUserCart(req, res) {
        try {

            let data = req.body;
            if (!data || !data.userId || !data.productId || !data.quantity) {
                throw new Error("Incorrect  or missing data ");
            }
            else {
                let cartData = new Cart(data);
                let result = await cartData.save();
                res.send({status: 200, "success": true})
            }

        } catch (err) {
            res.send({status: 400, "success": false})
        }
    },

    async removeProductFromUserCart(req, res) {
        try {

            let data = req.body;
            if (!data || !data.userId || !data.productId) {
                throw new Error("Incorrect  or missing data ");
            }
            else {

                const data = req.params;

                const result = await Cart.remove({
                    userId: data.userId,
                    productId: data.productId
                })
                res.send({status: 200, "success": true})
            }
        }
        catch (err) {
            res.send({status: 400, "success": false})
        }
    },

    async getUserCartData(req, res) {

        try {
            const data = req.params;
            const result = await Cart.find({
                userId: data.id
            }).populate('productId');

            if (!result) {
                return res.send({status: 400, 'message': "Bad Request", "success": false});
            }
            else {
                return res.send({status: 200, data: result, "success": true});
            }
        }
        catch (err) {
            console.log(err);
            return res.send({status: 400, 'message': "Bad Request", "success": false});
        }
    },

}

module.exports = users
