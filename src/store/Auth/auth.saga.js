import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

// import history from '../../services/history';
import api from '../../services/api';

import { signInSuccess, signFailure } from './auth.actions';

export function* signIn({ payload }) {
    try {
        const { user, password } = payload;

        const response = yield call(api.post, '/sessions', {
            user,
            password,
        });

        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        // history.push('/dashboard');
    } catch (error) {
        Alert.alert('Erro no Login', 'Verifique suas credenciais');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { user, password, verifyPassword } = payload;

        yield call(api.post, '/users', {
            user,
            password,
            verifyPassword,
        });

        // history.push('/');
    } catch (error) {
        Alert.alert('Erro no Login', 'Usuário já existente')
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('SIGN_IN_REQUEST', signIn),
    takeLatest('SIGN_UP_REQUEST', signUp),
    takeLatest('SIGN_OUT', signOut),
]);