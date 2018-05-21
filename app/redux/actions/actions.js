'uer static';

export const LOGIN_MESS = 'LOGIN_MESS';
export const USER_RANGE = 'USER_RANGE';

export const login_mess = (login_mess) =>{
  return {
    type: LOGIN_MESS,
    login_mess
  }
}

export const user_range = (lvl) => {
  return {
    type: USER_RANGE,
    lvl
  }
}