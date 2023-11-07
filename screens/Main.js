import React,{useState,useEffect,useContext} from 'react';
import {View, StyleSheet, SafeAreaView,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,Appbar ,Menu,Button,Divider} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTab from './TopTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Products from './Products';
import { MyContext } from '../mycontext';
const Main = () => {
    const  { text,cart,settext,setCart } = useContext(MyContext);
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
const searchnow=()=>{
 navigation.navigate("Newproducts",{query:searchQuery});
}
const [visible, setVisible] = React.useState(false);
 const openMenu = () => setVisible(true);

const closeMenu = () => setVisible(false);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.mainview}>
                <Appbar.Header>
                <Appbar.Action icon="menu" onPress={()=>openMenu()} />
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    <Appbar.Content title='Eshop' />
    <Appbar.Action icon="magnify" onPress={() => {}} />
    <Appbar.Action icon="heart" onPress={() => {}} />
    <Appbar.Action icon="cart" onPress={() => navigation.navigate("Cart")} />
  </Appbar.Header>
  <Text>{cart.length}</Text>
  <TopTab />
  {/* <Products product_type="all" /> */}

  
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
