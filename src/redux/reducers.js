import { GET_PRODUCTS, BUY_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from './actions';
import { getProducts, getId, updateId } from '../mockAPI';
import { filter } from 'underscore';

const defaultState = getProducts();

const ShopReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    case BUY_PRODUCT:
      return state.map(product => {
        if (product.id === action.payload.productId) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
    case ADD_PRODUCT:
      action.payload.product.id = getId();
      updateId();
      state.push(action.payload.product);
      return state;
    case EDIT_PRODUCT:
      return state.map(product => {
        if (product.id === action.payload.product.id) {
          return { ...product, ...action.payload.product };
        } else {
          return product;
        }
      });
    case DELETE_PRODUCT:
      const products = [...state];
      const newProducts = filter(products, p => p.id !== action.payload.productId);
      products.length = 0;
      products.push(...newProducts);
      return products;
    default:
      return state
  }
};

export default ShopReducer
