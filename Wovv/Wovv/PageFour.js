import React, { Component } from 'react';

import { Text, View, Button, TextInput } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AxiosAPI from './Api/Axios';

export default class PageFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: [],
            userID: '',
            postTitle: '',
            postBody: '',
            itemPost: [],
            postID: ''
        };
    }

    componentDidMount() {
        let tempUserItem = this.props.route.params.postItem;
        console.log("====================", tempUserItem);
        this.setState({
            itemPost: tempUserItem,
            userID: tempUserItem.userId,
            postTitle: tempUserItem.title,
            postBody: tempUserItem.body,
            postID: tempUserItem.id

        });


        console.log("=========userId===========", tempUserItem.userId);
        console.log("=========title===========", tempUserItem.title);
        console.log("=========body===========", tempUserItem.body);
        console.log("=========idPost===========", tempUserItem.id);
    }



    updateMethod = async () => {
        await AxiosAPI.put(`posts/${this.state.postID}`,
            JSON.stringify({
                id: this.state.postID,
                title: this.state.postTitle,
                body: this.state.postBody,
                userId: this.state.userID,
            })
        )

            .then(response => {

                //console.log("6666666666666666666666666666666", response.data);
                alert(JSON.stringify(response.data));
            }).catch(err => {

                alert(err);
            });
    }

    deleteMethod = async () => {
        await AxiosAPI.delete(`posts/${this.state.postID}`)
            .then(response => {

                // console.log("6666666666666666666666666666666", response);
                alert(JSON.stringify(response));
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
                            defaultValue={this.state.postTitle}
                            multiline={true}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Body:   </Text>
                        <TextInput
                            placeholder={'enter body'}
                            onChangeText={(text) => this.setState({ postBody: text })}
                            defaultValue={this.state.postBody}
                            multiline={true}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => this.updateMethod()}
                        style={{ backgroundColor: 'lightgreen', padding: 10, marginTop: 30, borderRadius: 10 }}
                    >
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            Update Post
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.deleteMethod()}
                        style={{ backgroundColor: 'red', padding: 10, marginTop: 30, borderRadius: 10 }}
                    >
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>
                            Delete Post
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
