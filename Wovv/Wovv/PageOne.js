import React, { Component } from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,User
} from '@react-native-google-signin/google-signin';
import { Text, View, Button, TextInput ,Alert} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AxiosAPI from './Api/Axios';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCount, decreaseCount, resetCount} from '../actions/index';

export default class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      firstVar: Number,
      secondVar: Number,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' ,padding:'5%'}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>Calculator</Text>
       <TextInput  onChangeText={val => this.setState({firstVar:val})} keyboardType={'numeric'} style={{width:'100%',height:'20%',fontSize:30,borderBottomColor:'black',borderBottomWidth:1,textAlign:'right'}}/>
     
       <TouchableOpacity style={{backgroundColor:'grey',borderRadius:10,borderWidth:1, width:'20%',height:'25%'}}>
         <Text style={{fontSize:25,textAlign:'center'}}>+</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{backgroundColor:'grey',borderRadius:10,borderWidth:1, width:'20%',height:'25%'}}>
         <Text style={{fontSize:25,textAlign:'center'}}> - </Text>
       </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
    handleReset: resetCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);