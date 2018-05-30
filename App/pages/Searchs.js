
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';

export default class Searchs extends React.Component{

  _goback(){
    this.props.navigation.goBack()
  }

  render(){
    return(
      <View>
        <Text>Searchs</Text>
        <Button title="go back" onPress={()=>this._goback()}/>
      </View>
    )
  }
}