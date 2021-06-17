import React, { Component } from 'react';

import { Text, View, Button, TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AxiosAPI from './Api/Axios';

export default class PageThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: [],
            userID: '',
            postTitle: '',
            postBody: '',
        };
    }

    componentDidMount() {
        let tempUserID = this.props.route.params.userIdData;
        console.log("====================", tempUserID);
        this.setState({ userID: tempUserID });
    }



    postMethod = async () => {
        await AxiosAPI.post('posts',
            JSON.stringify({
                title: this.state.postTitle,
                body: this.state.postBody,
                userId: this.state.userID,
            })
        )

            .then(response => {
                this.setState({
                    datasource: response.data,
                });
                //console.log("6666666666666666666666666666666", response.data);
                alert(JSON.stringify(response.data));
            }).catch(err => {

                alert(err);
            });
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ marginHorizontal: 30, justifyContent: 'flex-start', flex: 1, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Title:   </Text>
                        <TextInput
                            placeholder={'enter title'}
                            onChangeText={(text) => this.setState({ postTitle: text })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Body:   </Text>
                        <TextInput
                            placeholder={'enter body'}
                            onChangeText={(text) => this.setState({ postBody: text })}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.postMethod()}
                        style={{ backgroundColor: 'lightblue', padding: 10, marginTop: 30, borderRadius: 10 }}
                    >
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            Post
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
