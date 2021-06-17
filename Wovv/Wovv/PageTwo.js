import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AxiosAPI from './Api/Axios';


export default class PageTwo extends Component {

  constructor(props) {
    super(props);
    this.state = { userID: '', userPosts: [] };
  }

  componentDidMount() {

    let tempUserID = this.props.route.params.userIdData;
    //console.log("====================", tempUserID);
    this.setState({ userID: tempUserID }, () => { this.getUserData() });

    // this.getUserData();

  }

  getUserData = async () => {
    await AxiosAPI.get(`posts?userId=${this.state.userID}`).then(response => {
      this.setState({
        userPosts: response.data,
      });

      // console.log("+++++++++++++++++++", this.state.userPosts);
    }).catch(err => {

      alert(err);
    });
  }

  renderItem(item) {
    console.log('item', item.item.id)
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('PageFour', {
            postItem: item.item,
          })
        }
      >
        <View style={{ margin: 15 }}>
          <Text>ID :- {item.item.id}</Text>
          <Text>Title :- {item.item.title}</Text>
          <Text>Body :- {item.item.body}</Text>
          <Text>User ID :- {item.item.userId}</Text>
        </View>
      </TouchableOpacity>

    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 5 }}
        >
          <FlatList

            data={this.state.userPosts}
            renderItem={(item) => this.renderItem(item)}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('PageThree', {
                userIdData: this.state.userID,
              })
            }
            style={{ padding: 10, backgroundColor: 'yellow', marginHorizontal: 30, borderRadius: 10 }}
          >
            <Text style={{ textAlign: 'center', fontSize: 20 }}>Add Post</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
