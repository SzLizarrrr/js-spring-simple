import { LOGIN, LOGOUT } from '../actions/actions-auth';

export default function (state=false, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return action.payload;
    default:
      return state;
  }
}