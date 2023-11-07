import React,{useState,useEffect} from 'react';
import {View, StyleSheet, SafeAreaView,Text,useWindowDimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card ,BottomNavigation,} from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Products from './Products';
import About from './About';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';

const TopTab = ({navigation}) => {
  const {width,height}=useWindowDimensions();
    const Tab = createBottomTabNavigator();
    
    return (
        <View style={{ flex: 1,height:height-60}}>
           <Tab.Navigator
           screenOptions={{
            headerShown: false,
          }}>
            <Tab.Screen
        name="Home"
        component={Products}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="list" size={size} color={color} />;
          },
        }}
      />
        <Tab.Screen
        name="User"
        component={About}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="user" size={size} color={color} />;
          },
        }}
      />
      
            </Tab.Navigator>
        </View>
            
        
        
    
    );
}

const styles = StyleSheet.create({})

export default TopTab;
