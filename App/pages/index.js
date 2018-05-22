
import React from 'react';
import { 
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import RootStack from './../routers/routers';
import { ToolTabs, ToolHead, px2dp, g_style } from './../components';
export default class Index extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <ToolHead></ToolHead>
        <View style={styles.contant}>
          <RootStack />
        </View>
        <ToolTabs/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contant:{
    flex: 1,
    backgroundColor: '#eee'
  },
})