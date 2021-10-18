export function signin(name, username) {
    return {
        type: 'SIGNIN',
        payload: { name, username }
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

