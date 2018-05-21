
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';

export default class home extends React.Component{

  _goback(){
    this.props.navigation.goBack()
  }

  render(){
    return(
      <View>
        <Text>Home Screen</Text>
        <Button title="go back" onPress={()=>this._goback()}/>
      </View>
    )
  }
}