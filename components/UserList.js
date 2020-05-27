import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
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

    render() {
        const {nameList} = this.state;

        return (
            <View>
                { 
                nameList.map(user => <Text style={styles.user}>{user.email}</Text>)
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
  