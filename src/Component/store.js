import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './Slice'

const store = configureStore({
  reducer:{
  
          shopping : shoppingCartReducer,}


})

export default store

