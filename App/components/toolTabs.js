import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import px2dp from './px2dp';
import g_style from './styles';
export default class ToolTabs extends Component{

  componentDidMount(){
  }

  _tabsClick(e){
    console.log(e)
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.tabs} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text>Icon</Text>
          <Text>首页</Text>
        </View>
        <View style={styles.tabs} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text>Icon</Text>
          <Text>分区</Text>
        </View>
        <View style={styles.tabs} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text>Icon</Text>
          <Text>动态</Text>
        </View>
        <View style={styles.tabs} data-key="home" onPress={this._tabsClick.bind(this)}>
          <Text>Icon</Text>
          <Text>会员购</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: px2dp(143),
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  tabs:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectTabs:{
    color: "pink"
  }
})