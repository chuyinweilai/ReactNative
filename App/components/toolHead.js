import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { slider_ctrl } from './../redux/actions/actions'
import px2dp from './px2dp';
import g_style from './styles';
class ToolHead extends Component{
  constructor(props){
    super(props);
  }

  _tabsClick(type, e){
    if(type==="search"){
      console.log(this.props.navigation.navigate('Searchs'))
      
    }
  }


  _slider_ctrl(){
    const { slider_status, slider_todo } = this.props;
    slider_todo(!slider_status);
  }

  _home(){
    return (
      <View style={styles.container}>
        <View style={styles.UserHead} data-key="home">
          <TouchableOpacity onPress={this._slider_ctrl.bind(this)}>
            <Text style={[{fontFamily:'iconfont'}, styles.text, styles.sliderIcon]}>&#xe626;</Text>
          </TouchableOpacity>
          <Image style={styles.headImg} source={require('./../assets/img/head-Icon.jpg')}/>
        </View>
        <TouchableOpacity activeOpacity={1} style={styles.searchBox} data-key="home" onPress={this._tabsClick.bind(this, "search")}>
          <Text style={[{fontFamily:'iconfont'}, styles.searchIcon]}>&#xe614;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headbtn} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={[{fontFamily:'iconfont'}, styles.icon]}>&#xe69d;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headbtn} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={[{fontFamily:'iconfont'}, styles.icon]}>&#xe61f;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headbtn} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={[{fontFamily:'iconfont'}, styles.icon]}>&#xe637;</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render(){
    return (
      <View>
        {this._home()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: px2dp(228),
    flexDirection: 'row',
    backgroundColor: '#fb7299',
    alignItems: 'center',
  },
  /* home head */
  UserHead:{
    width: px2dp(192),
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderIcon:{
    width: px2dp(66),
    fontSize: px2dp(50),
    marginLeft: -px2dp(12)
  },
  headImg:{
    width: px2dp(76),
    height: px2dp(76),
    marginRight: px2dp(56),
    borderRadius: px2dp(38),
    borderWidth: px2dp(2),
    borderColor: g_style.white,
    
  },
  searchBox:{
    width: px2dp(450),
    height: px2dp(90),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5688c',
    borderRadius: px2dp(45),
    paddingRight: px2dp(45)
  },
  searchIcon:{
    width: px2dp(108),
    fontSize: px2dp(40),
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
  },
  search:{
    padding: 0,
    flex: 1,
    height: px2dp(40), 
  },
  headbtn:{
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    color: g_style.white,
    fontSize: px2dp(50),
  },
  text:{
    color: g_style.white
  },
  selectTabs:{
    color: "pink"
  },
})

ToolHead.propTypes = {
  "slider_status": PropTypes.bool.isRequired
}

const select = arr =>{
  let state = arr[arr.length-1];
  return {
    "slider_status": state.slider_status
  }
}

const Todo = (dispatch, ownProps) => {
  return {
    slider_todo: bol => dispatch(slider_ctrl(bol))
  }
}


export default connect(select, Todo)(ToolHead)