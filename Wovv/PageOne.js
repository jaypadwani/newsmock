import React, {Component} from 'react';

import {Text, View, Button, TextInput} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

export default class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: '',
      datasource_org: [],
      input: '',
      page: 0,
    };
  }

  componentDidMount() {
    
     this.getData();
    // setInterval(() => this.getData(), 10000);
  }

   getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('data====',responseJson)
        this.setState({
          datasource: responseJson,
          datasource_org: responseJson,
        });
        console.log('data        ====',this.state.datasource)
        console.log('data  datasource_org====',this.state.datasource_org)

      })
      .catch((error) => console.log(error));
  }

  renderItem(item) {
    console.log('item',item.item.address.city)
    return (
      <View style={{margin: 15}}>
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
    );
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <TextInput
          placeholder="Search by title/url/author"
          onChangeText={(input) => this.setState({input})}
        />
 

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
