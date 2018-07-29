export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
  return {
    type: LOGIN,
    payload: true
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: false
  };
}