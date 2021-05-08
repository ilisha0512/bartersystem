import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase'
import { DrawerItems } from 'react-navigation-drawer';

export default class CustomSidebarMenu extends React.Component{
    render(){
      return(
          <View style = {{flex: 1}}>
            <View style = {{flex: 0.8}}>
               <DrawerItems
               {
                   ...this.props
               }
               />
               <View style = {{flex: 0.2, justifyContent: 'flex-end', paddingBotton: 30}}>
                   <TouchableOpacity onPress = {()=>{
                       this.props.navigation.navigate("WelcomeScreen")
                       firebase.auth().signOut()
                   }}>
                       <Text>
                           Logout
                       </Text>
                   </TouchableOpacity>
               </View>
            </View>
          </View>
      )
    }
}