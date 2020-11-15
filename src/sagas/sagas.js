import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { getAllImagesAsync, getImageByIdAsync } from '../store/imagesSlice'
import {
  getAllcategoriesAsync,
  getCateoriesByTypeAsync,
} from '../store/categorySlice'

///////////////// Images /////////////////
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
  }
}
function* fetchImageById(action) {
  try {
    const image = yield call(() => {
      return axios
        .get(`http://localhost:3333/images/${action.payload}`)
        .then((response) => {
          return response.data
        })
    })
    yield console.log(image)
    yield put(getImageByIdAsync(image))
  } catch (error) {
    console.log(error.message)
    // yield put()
  }
}

///////////////// categories ///////////////////
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

function* getCateoriesByType(action) {
  try {
    const categories = yield call(() => {
      return axios
        .get(`http://localhost:3333/categories?type=${action.payload}`)
        .then((response) => {
          return response.data
        })
    })
    yield console.log(categories)
    yield put(getCateoriesByTypeAsync(categories))
  } catch (error) {
    console.log(error.message)
    // yield put()
  }
}

function* mySaga(payload) {
  yield console.log(payload)
  yield takeEvery('IMAGES_FETCH', fetchImages)
  yield takeEvery('IMAGES_FETCH_BY_CATEGORY_ID', fetchImagesByCategoryId)
  yield takeEvery('FETCH_IMAGE_BY_ID', fetchImageById)
  yield takeEvery('CATEGORIES_FETCH', fetchCategories)
  yield takeEvery('GET_CATEGORIES_BY_TYPE', getCateoriesByType)
}

export default mySaga
