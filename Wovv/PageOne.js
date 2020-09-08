import React, {Component} from 'react';

import {Text, View, Button, TextInput} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

export default class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: [],
      datasource_org: [],
      input: '',
      page: 0,
    };
  }

  componentDidMount() {
    this.getData();
    setInterval(() => this.getData(), 10000);
  }

  async getData() {
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          datasource: responseJson.hits,
          datasource_org: responseJson.hits,
        });
      })
      .catch((error) => console.log(error));
  }

  addPage() {
    const {page} = this.state;
    console.log('page', page);
    this.setState({page: this.state.page + 1});

    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          datasource: [...this.state.datasource, ...responseJson.hits],
          datasource_org: [...this.state.datasource, ...responseJson.hits],
        });
      })
      .catch((error) => console.log(error));
  }

  sortTitle() {
    var sorted = this.state.datasource;
    sorted.sort((a, b) => (a.title > b.title ? 1 : -1));
    console.log('dtatataatata', JSON.stringify(sorted));
    this.setState({
      datasource: sorted,
    });
  }

  sortCreated() {
    var sorted = this.state.datasource;
    sorted.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
    console.log('dtatataatata', JSON.stringify(sorted));
    this.setState({
      datasource: sorted,
    });
  }

  searching() {
    const {input} = this.state;
    //alert(input);

    var result = this.state.datasource_org.filter((ele) => {
      return (
        ele.author.toLowerCase().includes(input.toLowerCase()) ||
        ele.title.toLowerCase().includes(input.toLowerCase()) ||
        ele.url.toLowerCase().includes(input.toLowerCase())
      );
    });
    //  console.log(result);
    this.setState({
      datasource: result,
    });
  }

  renderItem(data) {
    return (
      <View style={{margin: 15}}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Search by title/url/author"
          onChangeText={(input) => this.setState({input})}
        />
        <Button title="Search" onPress={() => this.searching()}></Button>

        <Button title="Sort by Title" onPress={() => this.sortTitle()}></Button>

        <Button
          title="Sort by Created at"
          onPress={() => this.sortCreated()}></Button>

        <FlatList
          data={this.state.datasource}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
          onEndReached={() => {
            this.addPage();
          }}
          onEndReachedThreshold={0.3}
        />
      </View>
    );
  }
}
