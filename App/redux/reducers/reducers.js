import {
  LOGIN_MESS,
  USER_RANGE,
  PAGE_SELECT
} from './../actions/actions';

const initState = {
  "login_mess": {},
  "lvl": 0,
  "page": 'Login',
}

export default todoAdd = (state = initState, action) => {
  switch(action.type){
    case LOGIN_MESS:
      return Object.assign(state,{"login_mess": action.login_mess})
    case USER_RANGE:
      return Object.assign(state,{"lvl": action.lvl})
    case PAGE_SELECT:
      return Object.assign(state,{"page": action.page})
    default: return state
  }
}