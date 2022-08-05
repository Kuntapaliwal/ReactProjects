import {all, put, takeLatest} from 'redux-saga/effects';
import {FETECH_PRODUCTS_BEGIN,FETECH_PRODUCTS_SUCCESS} from '../Actions/MusicProductsAction'
//worker sagas 

//every saga is function generator
function* fetchProducts()
{
  let data=yield fetch('http://localhost:5501/products',{method:'GET'})
    .then(resp=>resp.json()).then(data=>data)


    yield put({type:FETECH_PRODUCTS_SUCCESS,payload:data})
}


//watcher sagas
function* actionWatcher()
{
    yield takeLatest(FETECH_PRODUCTS_BEGIN,fetchProducts)

}

export default function* rootsaga()
{
    yield all([
        actionWatcher()//if more watcher is there we can execute using ',' bcz this all effect runs parallely
    ]) 
}
