import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'loadsh'

import * as actions from './actions'
import * as  types from '../types'
import axios from '../../../services/axios'
import history from '../../../services/history'


function* loginRequest( {payload} ){
    try {
        const response = yield call(axios.post, '/login', payload)
        yield put(actions.loginSuccess({ ...response.data }))

        toast.success('Usuário logado');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`

        history.push('/dashboard')
        
    } catch (e) {
        toast.error('usuário ou senha inválidos');
        yield put(actions.loginFailure())
    }
   
}

function persistRehydrate({ payload }){
    const token = get(payload, 'auth.token', '')
   
    if(!token) return;

    axios.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
])