import {
  LOGIN_MESS,
  USER_RANGE,
  PAGE_SELECT,
  SLIDER_CTRL
} from './../actions/actions';

const initState = [{
  "login_mess": {},
  "lvl": 0,
  "page": 'Login',
  "slider_status": false,
}]

export default function todoApp (state = initState, action) {
  switch(action.type){
    case LOGIN_MESS:
      return [...state, Object.assign(...state, {"login_mess":action.login_mess})]
    case USER_RANGE:
      return [...state, Object.assign(...state, {"lvl":action.lvl})]
    case PAGE_SELECT:
      return [...state, Object.assign(...state, {"page":action.page})]
    case SLIDER_CTRL:
      return [...state, Object.assign(...state, {"slider_status":action.slider_status})]
    default: return state
  }
}