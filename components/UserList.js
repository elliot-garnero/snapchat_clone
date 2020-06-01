import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class UserList extends React.Component {

    state = {
        nameList: [],
        btnVisible: false,
        token: "BRHtEJPd3N3Za3VMDmCDEPST",
        duration: 5,
        email: '',
        image: '',
    }

    componentDidMount() {
        axios.get('http://snapi.epitech.eu/all', {
            headers: {
                "token": this.state.token
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

    onPress = (userMail) => {
        this.state.email = userMail;
        this.setState({
            btnVisible: !this.state.btnVisible,
        });

        const value = AsyncStorage.getItem('image');
        value.then((res) => {
            this.state.image = res;
        })
    }

    sendSnap = () => {
        console.log(this.state);
        const imgFormData = new FormData();
        imgFormData.set("duration", this.state.duration);
        imgFormData.set("to", this.state.email);
        imgFormData.append("image", this.state.image);

        axios.post('http://snapi.epitech.eu/snap', {
            headers: {
                "token": this.state.token
            },
            body: imgFormData,
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const {nameList} = this.state;
        return (
            <View>
                <View style={styles.sendButton}>
                    {this.state.btnVisible?
                    <>
                    <Button
                    title="Send"
                    onPress={() => this.sendSnap()}
                    />
                    <Text>Send snap to {this.state.email}</Text>
                    </>
                    :null}
                </View>
                {
                nameList.map(user =>
                <TouchableOpacity
                    style={[styles.user]}
                    onPress={() => this.onPress(user.email)}
                    >
                    <Text style={[styles.userText]}>{user.email}</Text>
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
    },
    userText: {
        textAlign: "center",
        fontWeight: "bold"
    },
    sendButton: {
        marginTop: 16
    }
});