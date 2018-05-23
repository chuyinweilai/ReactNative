
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';

export default class Purchase extends React.Component{

  _goback(){
    this.props.navigation.goBack()
  }

  render(){
    return(
      <View>
        <Text>Purchase</Text>
        <Button title="go back" onPress={()=>this._goback()}/>
      </View>
    )
  }
}