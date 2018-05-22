import {Dimensions} from 'react-native'
// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// 参考图为 1080*1920
const uiWidthPx = 1080;
 
function pxToDp(uiElementPx) {
  return uiElementPx *  deviceWidthDp / uiWidthPx;
}
export default pxToDp;