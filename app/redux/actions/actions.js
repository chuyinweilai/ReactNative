'uer static';

export const LOGIN_MESS = 'LOGIN_MESS';
export const USER_RANGE = 'USER_RANGE';
export const PAGE_SELECT = 'PAGE_SELECT';

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

export const page_select = (page) => {
  return {
    type: PAGE_SELECT,
    page
  }
}