const users = require('../controllers/users.controller')
const categories = require('../controllers/category.controller')
const products = require('../controllers/product.controller')

module.exports = ( app)=> {
    app.post('/api/v1/user/login', users.login);
    app.get('/api/v1/user/cart/:id', users.getUserCartData);
    app.get('/api/v1/user/addCartProduct', users.addProductToUserCart);
    app.get('/api/v1/user/removeCartProduct', users.removeProductFromUserCart);
    app.post('/api/v1/viewAllProduct', products.getProductList);
    app.post('/api/v1/viewAllCategory', categories.getCategoryList);
    app.get('/api/v1/searchProduct/:category', products.search);
}
