import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { getAllImagesAsync } from '../store/imagesSlice'
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchImages(action) {
  try {
    const images = yield call(() => {
      return axios.get('http://localhost:3333/images').then((response) => {
        console.log(response.data)
        return response.data
      })
    })
    yield console.log(images)
    yield put(getAllImagesAsync(images))
  } catch (error) {
    console.log(error.message)
    yield put()
  }
  //   const user = yield call(Api.fetchUser, action.payload.userId)
  //   yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
  //   } catch (e) {
  //   yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  //   }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('IMAGES_FETCH', fetchImages)
}

/*
    Alternatively you may use takeLatest.
  
    Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
    dispatched while a fetch is already pending, that pending fetch is cancelled
    and only the latest one will be run.
  */
// function* mySaga() {
//   yield takeLatest('IMAGES_FETCH', fetchImages)
// }

export default mySaga
