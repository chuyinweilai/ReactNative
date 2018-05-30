
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Button,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  DrawerLayoutAndroid
} from 'react-native';
import { connect } from 'react-redux';
import { slider_ctrl, login_mess } from './../redux/actions/actions';
import RootStack from './../routers/routers';
import { Slider, px2dp, g_style, ToolHead } from './../components';

class Index extends Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(props){
    let DrawerLayoutAndroid = this.refs.DrawerLayoutAndroid ;
    const { slider_status } = props;
    if(DrawerLayoutAndroid){
      slider_status? DrawerLayoutAndroid.openDrawer(): DrawerLayoutAndroid.closeDrawer();
    }
  }

  render(){
    const { slider_status, slider_todo } = this.props;
    return (
      <DrawerLayoutAndroid
        ref="DrawerLayoutAndroid"
        drawerWidth={300}
        onDrawerClose={() => slider_todo(false)}
        onDrawerOpen ={() => slider_todo(true)}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Slider/>}>
          <StatusBar translucent={true} backgroundColor={"rgba(0,0,0,0)"}/>
          <View style={styles.container}>
            <View style={styles.contant}>
              <RootStack />
            </View>
          </View>
      </DrawerLayoutAndroid>
    );
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
  "page": PropTypes.string.isRequired,
  "slider_status": PropTypes.bool.isRequired
}


const select = (arr, ownProps) =>{
  let state = arr[arr.length-1];
  return {
    "login_mess": state.login_mess,
    "lvl": state.lvl,
    "page": state.page,
    "slider_status": state.slider_status
  }
}

const Todo = (dispatch, ownProps) => {
  return {
    slider_todo: bol => dispatch(slider_ctrl(bol))
  }
}

export default connect(select, Todo)(Index)