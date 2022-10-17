import {
  ADD_CART,
  ALL_PRODUCTS,
  
  GET_ALL_CATEGORIES,
  
  PRODUCTS_TO_DISPLAY,
  PRODUCT_DETAILS,
  REMOVE_CART,
} from "../actions/products.actions";

const initialState = {
  allProducts: "",
  productDetails: "",
  productsToDisplay: "",
  allCategories:[],
  cart: [],
};

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS: {
      return {
        ...state,
        allProducts: action.payload,
      };
    }
    case PRODUCT_DETAILS: {
      return {
        ...state,
        productDetails: action.payload,
      };
    }
    case PRODUCTS_TO_DISPLAY: {
      return {
        ...state,
        productsToDisplay: action.payload,
      };
    }
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case ADD_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.payload
      }
    default:
      return state;
  }
}
