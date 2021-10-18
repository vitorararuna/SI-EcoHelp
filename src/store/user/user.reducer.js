
import produce from 'immer';

const INITIAL_STATE = {
    signed: false,
    username: "",
    name: "",
    tipo_local: "Ponto de Coleta",
    icon_local: ""
}

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case 'SIGNIN': {
                draft.signed = true;
                draft.name = action.payload.name;
                draft.username = action.payload.username;
                break;
            }
            case 'SETLOCAL': {
                draft.tipo_local = action.payload.tipo;
                draft.icon_local = action.payload.nomeIcon;
                break;
            }
            case 'SIGNOUT': {
                draft.signed = false;
                draft.name = "";
                draft.username = "";
                break;
            }
            default:
        }
    });
}