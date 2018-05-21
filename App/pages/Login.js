
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';

export default class Login extends React.Component{

  _jump(){
    this.props.navigation.navigate('Home')
  }

  render(){
    return(
      <View>
        <Text>Login In</Text>
        <Button title="go to home" onPress={()=>this._jump()}/>
      </View>
    )
  }
}