import {
  LOGIN_MESS,
  USER_RANGE
} from './../actions/actions';

const initState = [{
  "login_mess": {},
  "lvl": 0,
}]

export default todoAdd = (state = initState, action) => {
  switch(action.type){
    case LOGIN_MESS:
      return [...state, Object.assign(...state,{"login_mess": action.login_mess})]
    case USER_RANGE:
      return [...state, Object.assign(...state,{"lvl": action.login_mess})]
    default: return state
  }
}