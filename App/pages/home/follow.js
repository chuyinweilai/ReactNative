
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';

export default class LiveVideo extends React.Component{

  componentWillMount(){
    console.log(this.props)
  }

  render(){
    return(
      <View>
        <Text>追番</Text>
      </View>
    )
  }
}