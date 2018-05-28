'uer static';

export const LOGIN_MESS = 'LOGIN_MESS';
export const USER_RANGE = 'USER_RANGE';
export const PAGE_SELECT = 'PAGE_SELECT';
export const SLIDER_CTRL = 'SLIDER_CTRL';

// 用户信息
export const login_mess = (login_mess) =>{
  return {
    type: LOGIN_MESS,
    login_mess
  }
}

// 用户等级
export const user_range = (lvl) => {
  return {
    type: USER_RANGE,
    lvl
  }
}

// 选择页面
export const page_select = (page) => {
  return {
    type: PAGE_SELECT,
    page
  }
}

// 侧边栏开关
export const slider_ctrl = (slider_status) => {
  return {
    type: SLIDER_CTRL,
    slider_status
  }
}

