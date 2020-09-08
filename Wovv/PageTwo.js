import React, {Component} from 'react';

import {Text, View} from 'react-native';

export default class PageTwo extends Component {
  render() {
    const temp = this.props.route.params.data;
    console.log('ffffffffffffff', temp);
    return (
      <View>
        <Text>{JSON.stringify(temp)}</Text>
      </View>
    );
  }
}
