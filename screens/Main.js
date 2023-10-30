import React,{useState,useEffect} from 'react';
import {View, StyleSheet, SafeAreaView,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTab from './TopTab';
import Icon from 'react-native-vector-icons/FontAwesome';
const Main = () => {
    
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.mainview}>
                    <Surface style={styles.headsection} elevation={4}>
                    <Icon name="user" size={30} color="#900" style={{marginTop:10}} />
                    <View style={{width:280}}>
                    <Searchbar
      placeholder="Search"
    />
   
                    </View>
                    <Icon name="shopping-cart" size={30} color="black" /> 
                    <Icon name="heart" size={30} color="black" style={{marginLeft:5}} />
                    </Surface>
                    <TopTab />
                </View>
               


            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainview:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        height:'400',
    
    },
    headsection:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        height:50
    }
})

export default Main;
