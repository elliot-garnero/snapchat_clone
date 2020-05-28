import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class UserList extends React.Component {

    state = {
    nameList: []
    }

    componentDidMount() {
        axios.get('http://snapi.epitech.eu/all', {
            headers: {
                "token": "BRHtEJPd3N3Za3VMDmCDEPST"
            }
        })
        .then(res => {
            const nameList = res.data;
            this.setState({ nameList: nameList.data });
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onPress = (email) => {
        //get picture
        //send it to email account (need to get token)
        console.log(email);
    }

    render() {
        const {nameList} = this.state;
        return (
            <View>
                {
                nameList.map(user =>
                <TouchableOpacity
                    style={[styles.user]}
                    onPress={() => this.onPress(user.email)}
                    onPress={this.backgroundColor = "#F8F8F8"}
                    >
                    <Text>{user.email}</Text>
                </TouchableOpacity>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    user: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        color: "#20232a",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
});