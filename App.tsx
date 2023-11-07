/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { Banner } from 'react-native-paper';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Main from './screens/Main';
import Product from './screens/Product';
import Newproducts from './screens/Newproducts';
import Carts from './screens/Carts';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
 <NavigationContainer independent={true}>
          <Stack.Navigator>
             <Stack.Screen name="Main" options={{headerShown: false}} component={Main} />
             <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
             <Stack.Screen name="Product"  component={Product} />
             <Stack.Screen name="Cart"  component={Carts} />
             <Stack.Screen name="Newproducts" options={{headerShown: false}} component={Newproducts} />
          </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
         
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
