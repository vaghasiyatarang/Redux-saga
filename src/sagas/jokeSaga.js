import { call, put, takeEvery, takeLatest ,delay} from 'redux-saga/effects'



const fetchjoke = async () =>{
    const res = await fetch("http://api.icndb.com/jokes/random?firstName=John&lastName=Doe")
    const result = await res.json()
    return result.value.joke
}


function* getjoke() {

    const joke = yield fetchjoke()
    yield put({type:"JOKE_SUCCESS",payload:joke})
    
 }

//   yield  =>  await

function* jokeSaga(){
    yield takeLatest("GET_JOKE",getjoke)
}
export default jokeSaga