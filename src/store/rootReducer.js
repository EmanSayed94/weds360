// import {combineReducers}

import imagesReducer from './imagesSlice'
import categorySlice from './categorySlice'

export default {
  images: imagesReducer,
  category: categorySlice,
}
