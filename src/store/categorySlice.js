import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    getAllcategoriesAsync: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const { getAllcategoriesAsync } = categorySlice.actions

export default categorySlice.reducer
