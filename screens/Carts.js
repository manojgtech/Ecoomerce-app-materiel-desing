import React,{useContext} from 'react';
import {View, StyleSheet,useWindowDimensions} from 'react-native';
import { MyContext } from '../mycontext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,ActivityIndicator, MD2Colors,Button,Badge,AnimatedFAB, Text } from 'react-native-paper';
const Carts = () => {
    const {width,height}=useWindowDimensions();
 const {text,cart,settext,setCart }=useContext(MyContext);
 console.log(cart);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{display:'flex',flexDirection:'column',marginTop:10}}>
                    <Text style={{fontSize:30,fontWeight:500,color:'black',textAlign:'center'}}>Cart Items {cart.length}</Text>
                {cart.length>0 && cart.map((item)=>{
                    return(<Card style={{height:80,width:width,backgroundColor:'white'}}>
                        {/* <Card.Cover source={{uri:item.image}} /> */}
                         <Card.Content>
                            <Text style={{color:'black',fontSize:24,textAlign:'center'}}>{item.title}</Text>
                            <Text style={{color:'black',fontSize:24,textAlign:'center'}}>{item.price}</Text>
                            <Text style={{color:'black',fontSize:24,textAlign:'center'}}>{item.q}</Text>
    
                         </Card.Content>
                    </Card>);
                })}
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Carts;
