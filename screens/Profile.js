import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
const Profile = () => {
   const  _onNavigationStateChange=(webViewState)=>{
        console.log(webViewState.url)
      }
    return (
        <View style={{height:700,flex:1,backgroundColor:'red'}}>
            <Text> Load</Text>
            <WebView
       source={{uri:"https://finded.in/shopquicky/"}}
       style={{ marginTop: 20,height:650 }}
     />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
