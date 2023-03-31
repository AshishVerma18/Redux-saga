import { all } from 'redux-saga/effects'
import { loginSaga } from "./home/saga";



function* rootSaga() {
    yield all([
        ...loginSaga
    ])
}

export default rootSaga