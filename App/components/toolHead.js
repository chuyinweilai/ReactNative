import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import px2dp from './px2dp';
import g_style from './styles';
export default class ToolHead extends Component{

  _tabsClick(e){
    console.log(e)
  }

  _home(){
    return (
      <View style={styles.container}>
        <View style={styles.UserHead} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={[{fontFamily:'iconfont'}, styles.text, styles.sliderIcon]}>&#xe626;</Text>
          <Image style={styles.headImg} source={require('./../assets/img/head-Icon.jpg')}/>
        </View>
        <View style={styles.searchBox} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={[{fontFamily:'iconfont'}, styles.searchIcon]}>&#xe614;</Text>
          <TextInput
            style={styles.search}
            maxLength={10}
            autoCorrect={false}
            multiline = {false}
            underlineColorAndroid="transparent"
          />
        </View>
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
    justifyContent: 'center',
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