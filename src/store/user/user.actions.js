export function signin(name, username, id) {
    return {
        type: 'SIGNIN',
        payload: { name, username, id}
    }
}

export function setlocal(tipo, nomeIcon) {
    return {
        type: 'SETLOCAL',
        payload: {tipo, nomeIcon}
    }
}

export function signout() {
    return {
        type: 'SIGNOUT',
    }
}

