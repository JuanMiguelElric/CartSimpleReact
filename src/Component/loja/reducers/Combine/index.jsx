import { combineReducers } from 'redux';
import products from '../produtos/products';
import cart from '../carrinho/Cart';

export default combineReducers({
    products,
    cart
})