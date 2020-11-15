import { createSlice } from '@reduxjs/toolkit'

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    allImages: [],
    images: [],
  },
  reducers: {
    getAllImagesAsync: (state, action) => {
      state.images = action.payload
      state.allImages = action.payload
    },
    getImagesByCategoryId: (state, action) => {
      state.images = action.payload
      state.allImages = action.payload
    },
    searchForImage: (state, action) => {
      const searchValue = action.payload
      let images = state.allImages
      images = images.filter((img) =>
        img.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      console.log(images)
      state.images = [...images]
    },
    clearSearch: (state, action) => {
      state.images = [...state.allImages]
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const {
  getAllImagesAsync,
  searchForImage,
  clearSearch,
} = imagesSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default imagesSlice.reducer
