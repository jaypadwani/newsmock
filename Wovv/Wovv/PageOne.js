import React, { Component } from 'react';

import { Text, View, Button, TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AxiosAPI from './Api/Axios';

export default class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: [],
    };
  }

  componentDidMount() {
    this.getAllUserData();
  }



  getAllUserData = async () => {
    await AxiosAPI.get(`users`).then(response => {
      this.setState({
        datasource: response.data,
      });

    }).catch(err => {

      alert(err);
    });
  }

  renderItem(item) {
    // /console.log('item', item.item.id)
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('PageTwo', {
            userIdData: item.item.id,
          })
        }
      >
        <View style={{ margin: 15 }}>
          <Text>Name :- {item.item.name}</Text>
          <Text>UserName :- {item.item.username}</Text>
          <Text>Phone :- {item.item.phone}</Text>
          <Text>Company Name :- {item.item.company.name}</Text>
          {/* <TouchableOpacity
          style={{borderColor: 'black', borderWidth: 1, padding: 10}}
          onPress={() =>
            this.props.navigation.navigate('PageTwo', {
              data: this.state.datasource,
            })
          }>
          <Text style={{alignSelf: 'center'}}>Author :{data.item.author}</Text>
          <Text style={{alignSelf: 'center', fontSize: 18}}>
            Title :{data.item.title}
          </Text>
          <Text style={{alignSelf: 'center', fontSize: 18}}>
            Created_at :{data.item.created_at}
          </Text>
          <Text style={{alignSelf: 'center'}}>url :{data.item.url}</Text>
        </TouchableOpacity> */}
        </View>
      </TouchableOpacity>

    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {/* <TextInput
          placeholder="Search by title/url/author"
          onChangeText={(input) => this.setState({ input })}
        /> */}


        <FlatList
          data={this.state.datasource}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id}

        //onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}
