
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';
import { createTabNavigator  } from 'react-navigation';
import { ToolHead, px2dp, g_style} from './../components';

export default class Purchase extends React.Component{

  _goback(){
    this.props.navigation.goBack()
  }

  render(){
    return(
      <View>
        <ToolHead></ToolHead>
        <Button title="go back" onPress={()=>this._goback()}/>
      </View>
    )
  }
}
