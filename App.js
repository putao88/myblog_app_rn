import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';



export default class App extends Component {
    render () {
        return (
            <View>
              <Header
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'MYBLOG', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'home', color: '#fff' }}
              />
              <Image
                  source={require("./static/img/banner.jpg")}
                  style={StyleSheet.header_banner}
                  />
      
            </View>
      
        );
    }
}

// //style
const styles = StyleSheet.create({
    header_banner: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});



