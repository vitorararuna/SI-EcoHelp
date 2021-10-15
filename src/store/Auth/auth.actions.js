export function signInRequest(user, password) {
    return {
      type: 'SIGN_IN_REQUEST',
      payload: { user, password },
    };
  }
  
  export function signInSuccess(token, user) {
    return {
      type: 'SIGN_IN_SUCCESS',
      payload: { token, user },
    };
  }
  
  export function signUpRequest(user, password, verifyPassword) {
    return {
      type: 'SIGN_UP_REQUEST',
      payload: { user, password, verifyPassword },
    };
  }
  
  export function signFailure() {
    return {
      type: 'SIGN_FAILURE',
    };
  }
  
  export function signOut() {
    return {
      type: 'SIGN_OUT',
    };
  }