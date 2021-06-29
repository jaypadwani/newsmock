import React, {Component} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {increaseCount, decreaseCount, resetCount} from './Api/Redux/Action/Index';

class Home extends Component {
  //  componentDidMount=()=>{
  //      this.props.handleIncrease()
  //      this.props.handleDecrease()
  //  }
  constructor(props) {
    super(props);
    this.state = {
      firstVar: 0,
      secondVar: 0,
      result:'',
    };
  }

  add = () => {
   // console.log(parseInt(this.state.firstVar) + parseInt(this.state.secondVar));
   // console.log(typeof(this.state.firstVar))
    this.setState({result:parseInt(this.state.firstVar) + parseInt(this.state.secondVar)})
  };


  
  subtract = () => {
    // console.log(parseInt(this.state.firstVar) + parseInt(this.state.secondVar));
    // console.log(typeof(this.state.firstVar))
     this.setState({result:parseInt(this.state.firstVar) - parseInt(this.state.secondVar)})
   };


   multiply = () => {
    // console.log(parseInt(this.state.firstVar) + parseInt(this.state.secondVar));
    // console.log(typeof(this.state.firstVar))
     this.setState({result:parseInt(this.state.firstVar) * parseInt(this.state.secondVar)})
   };


   divide = () => {
    // console.log(parseInt(this.state.firstVar) + parseInt(this.state.secondVar));
    // console.log(typeof(this.state.firstVar))
     this.setState({result:parseInt(this.state.firstVar) / parseInt(this.state.secondVar)})
   };

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',marginTop:15}}> Calculator </Text>

<View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TextInput
        keyboardType={'numeric'}
          onChangeText={(text) => this.setState({firstVar: text})}
          style={{borderBottomWidth: 1, fontWeight:'bold',fontSize: 20, width: 150, height: 50,textAlign:'center'}}
        />


<TextInput   keyboardType={'numeric'}
          onChangeText={(texts) => this.setState({secondVar: texts})}
          style={{borderBottomWidth: 1, fontWeight:'bold',fontSize: 20, width: 150, height: 50,textAlign:'center'}}
        />
</View>

<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
     <TouchableOpacity onPress={this.add} 
        style={{backgroundColor:'lightgrey',margin:10,justifyContent:'center',borderRadius:10,borderWidth:1, width:'20%',height:50,alignContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',}}>Add</Text>
        </TouchableOpacity>




<TouchableOpacity onPress={this.subtract} 
        style={{backgroundColor:'lightgrey',margin:10,justifyContent:'center',borderRadius:10,borderWidth:1, width:'20%',height:50,alignContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',}}> Subtract</Text>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
        <TouchableOpacity onPress={this.multiply} 
        style={{backgroundColor:'lightgrey',margin:10,justifyContent:'center',borderRadius:10,borderWidth:1, width:'25%',height:50,alignContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:16,fontWeight:'bold',}}> Multiply</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.divide} 
        style={{backgroundColor:'lightgrey',margin:10,justifyContent:'center',borderRadius:10,borderWidth:1, width:'20%',height:50,alignContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',}}> Divide</Text>
        </TouchableOpacity>
</View>

        <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',margin:25}}> Result </Text>
<Text style={{marginTop:15,fontSize:25,fontWeight:'bold',textAlign:'center',margin:20,borderBottomWidth:1}}> {this.state.result} </Text>
   
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     count: state.reducer.count,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     handleIncrease: increaseCount,
//     handleDecrease: decreaseCount,
//     handleReset: resetCount,
//   }, dispatch)
// }

export default Home;
