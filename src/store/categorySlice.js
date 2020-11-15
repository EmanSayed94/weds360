import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    allCategoryByTypes: [],
    categories: [],
    categoriesByType: [],
  },
  reducers: {
    getAllcategoriesAsync: (state, action) => {
      state.categories = action.payload
    },
    getCateoriesByTypeAsync: (state, action) => {
      state.categoriesByType = action.payload
      state.allCategoryByTypes = action.payload
    },
    searchForCategory: (state, action) => {
      const searchValue = action.payload
      let categories =
        searchValue === ''
          ? state.allCategoryByTypes
          : categories.filter((cat) =>
              cat.name.toLowerCase().includes(searchValue.toLowerCase()),
            )

      state.categoriesByType = [...categories]
    },
  },
})

export const {
  getAllcategoriesAsync,
  getCateoriesByTypeAsync,
  searchForCategory,
} = categorySlice.actions

export default categorySlice.reducer
