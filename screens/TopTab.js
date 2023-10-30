import React,{useState,useEffect} from 'react';
import {View, StyleSheet, SafeAreaView,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Products from './Products';
import About from './About';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native';

const TopTab = () => {
    const Tab = createMaterialTopTabNavigator();
    const [cats, setcats] = useState([]);
      useEffect(() => {
       loadProducts();
    });
    
    const loadProducts=()=>{
            var myHeaders = new Headers();
        myHeaders.append("X-Authorization", "sk_test_547383f4802e9ccea377c72983e97f6cdefb08ddd3445");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://api.chec.io/v1/categories", requestOptions)
        .then(response => response.json())
        .then(result =>{ setcats(result.data);})
        .catch(error => console.log('error', error));
    }
    return (
        <View style={{ flex: 1,height:1800 }}>
          {cats.length ? <Tab.Navigator
         swipeEnabled={false}
        initialRouteName="Products"
        screenOptions={{headerShown: false}}>
               {cats.map((cat)=>{
                return( <Tab.Screen name={cat.name} component={Products} initialParams={{product_type: cat.slug}} />);
               })}
               
                
            </Tab.Navigator> : <Tab.Navigator
         swipeEnabled={false}
        initialRouteName="Products"
        screenOptions={{headerShown: false}}>
            
                <Tab.Screen name="Male" component={Products} initialParams={{product_type: 'male'}} />
                
            </Tab.Navigator>}
        </View>
            
        
        
    
    );
}

const styles = StyleSheet.create({})

export default TopTab;
