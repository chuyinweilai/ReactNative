
import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';
import { createTabNavigator  } from 'react-navigation';
import LiveVideo from './home/liveVideo';
import Recommend from './home/recommend';

// export default class Home extends React.Component{

//   _goback(){
//     this.props.navigation.goBack()
//   }

//   render(){
//     return(
//       <View>
//         <Text>Home Screen</Text>
//         <Button title="go back" onPress={()=>this._goback()}/>
//       </View>
//     )
//   }
// }

export default Home = createTabNavigator(
  {
    LiveVideo: LiveVideo,
    Recommend: Recommend
  }
)

