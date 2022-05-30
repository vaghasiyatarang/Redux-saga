import { all ,call } from 'redux-saga/effects'
import jokeSaga from './jokeSaga'
import userSaga from './userSaga'


function* rootSaga(){
    yield all([
        call(jokeSaga),
        call(userSaga)
    ])
}


// import { all } from 'redux-saga/effects'
// import jokeSaga from './jokeSaga'
// import userSaga from './userSaga'


// function* rootSaga(){
//     yield all([
//         jokeSaga(),
//         userSaga()
//     ])
// }

export default rootSaga