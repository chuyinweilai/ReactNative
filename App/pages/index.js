
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import RootStack from './../routers/routers';
import { ToolHead, px2dp, g_style } from './../components';

class Index extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  render(){
    return(
      <View style={styles.container}>
        <ToolHead></ToolHead>
        <View style={styles.contant}>
          <RootStack />
        </View>
        {/* <ToolTabs/> */}
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

Index.propTypes = {
  "login_mess": PropTypes.object.isRequired,
  "lvl": PropTypes.number.isRequired,
  "page": PropTypes.string.isRequired
}


const select = state =>({
  "login_mess": state.login_mess,
  "lvl": state.lvl,
  "page": state.page,
})

export default connect(select)(Index)