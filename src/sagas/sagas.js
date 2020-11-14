import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { getAllImagesAsync } from '../store/imagesSlice'
import { getAllcategoriesAsync } from '../store/categorySlice'

function* fetchImages(action) {
  try {
    const images = yield call(() => {
      return axios.get('http://localhost:3333/images').then((response) => {
        return response.data
      })
    })
    yield put(getAllImagesAsync(images))
  } catch (error) {
    console.log(error.message)
    // yield put()
  }
}

function* fetchCategories(action) {
  try {
    const categories = yield call(() => {
      return axios.get('http://localhost:3333/categories').then((response) => {
        return response.data
      })
    })
    yield put(getAllcategoriesAsync(categories))
  } catch (error) {
    console.log(error.message)
    // yield put()
  }
}

function* fetchImagesByCategoryId(action) {
  try {
    const images = yield call(() => {
      return axios
        .get(`http://localhost:3333/images?categoryId=${action.payload}`)
        .then((response) => {
          return response.data
        })
    })
    yield put(getAllImagesAsync(images))
  } catch (error) {
    console.log(error.message)
    // yield put()
  }
}

function* mySaga(payload) {
  yield console.log(payload)
  yield takeEvery('IMAGES_FETCH', fetchImages)
  yield takeEvery('IMAGES_FETCH_BY_CATEGORY_ID', fetchImagesByCategoryId)
  yield takeEvery('CATEGORIES_FETCH', fetchCategories)
}

export default mySaga
