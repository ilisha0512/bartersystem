import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, TouchableHighlight, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, FlatList, KeyboardAvoidingView } from 'react-native';
import db from '../Config'
import firebase from 'firebase'
import MyHeader from './MyHeader'
import { ListItem } from 'react-native-elements'
import { SwipeListView } from 'react-native-swipe-list-view'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class SwipableFlatList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            allNotifications: this.props.allNotifications,
        }
       
    }

    updateMarkedAsRead = (notification)=>{
        db.collection("all_notifications").doc(notication.doc_id).update({
            "notification_status": "read"
        })
        
    }
       
    deleteRow = (item, key)=>{
        var allNotifications = this.state.allNotifications
        this.closeRow(item, key)
        const newData = [...allNotifications]
        const previousIndex = allNotifications.findIndex(item => item.key === key)
        this.updateMarkedAsRead(allNotifications[previousIndex])
        newData.Splice(previousIndex, 1)
        this.setState({
            allNotifications: newData
        })

    }

    closeRow = (item, key)=>{
       if(item[key]){
           item[key].closeRow()
       }
    }

    renderItem = ({item})=>{
        return(
            <TouchableHighlight>
            <ListItem
            title = {item.book_name}
            subtitle = {item.item.message}
            titleStyle = {{color: "#00007C", fontWeight: "bold"}}
            bottomDivider
            />
            </TouchableHighlight>
        )
     }

    componentDidMount(){
        this.getRequestedBookList()
    }

   
}