import React,{Component} from 'react';
import {
  View,
  Text,
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
          <Text style={styles.text}>Icon</Text>
          <Text style={styles.text}>首页</Text>
        </View>
        <View style={styles.searchBox} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={styles.searchIcon}>*</Text>
          <TextInput
            style={styles.search}
            maxLength={10}
            autoCorrect={false}
            multiline = {false}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.tabs} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={styles.text}>Icon</Text>
          <Text style={styles.text}>动态</Text>
        </View>
        <View style={styles.tabs} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text style={styles.text}>Icon</Text>
          <Text style={styles.text}>会员购</Text>
        </View>
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
  UserHead:{
    width: px2dp(192),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
  },
  search:{
    padding: 0,
    flex: 1,
    height: px2dp(40), 
  },
  text:{
    color: g_style.white
  },
  selectTabs:{
    color: "pink"
  },
})