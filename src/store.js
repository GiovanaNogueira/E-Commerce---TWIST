import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductsSlice';
import filterReducer from './FilterSlice';
import adressReducer from './AdressSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        filter: filterReducer,
        adress: adressReducer, 
    },
})