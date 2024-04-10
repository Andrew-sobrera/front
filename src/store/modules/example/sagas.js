import { call, put, all, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import * as  types from '../types'

const req = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

function* exampleRequest(){
    try {
        yield call(req)
        yield put(actions.clicaBotaoSuccess())
    } catch{
        yield put(actions.clicaBotaoFailure())
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])