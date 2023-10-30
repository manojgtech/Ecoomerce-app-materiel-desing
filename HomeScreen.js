import React,{useEffect} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import { Divider, Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = ({navigation}) => {
    useEffect(() => {
       setTimeout(() => {
        navigation.navigate("Main");
       }, 3000);
    });
    return (
        <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 4)']}  style={{flex:1}}>     
           <View style={{width:'100%',height:'100%',flex:1,display:'flex',alignItems:'center',backgroundColor:'green'}}>
                    <View style={{marginTop:200}}>
                        <Text style={{fontSize:40,fontWeight:'bold'}}>Fancy GiftShop</Text>
                        <Image source={require('./img/gift.jpg')} style={{width:140,height:120,alignSelf:'center'}} />
                    </View>
                </View>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
