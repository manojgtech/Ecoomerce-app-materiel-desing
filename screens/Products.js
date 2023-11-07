import React ,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,Image,useWindowDimensions,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,ActivityIndicator, MD2Colors,Button,Badge,AnimatedFAB } from 'react-native-paper';
import Productlist from './Productlist';


const Products = ({product_type}) => {
     const {width,height}= useWindowDimensions();
    const [cats,setcats]=useState(['men',"kids","women"]);
    const [gallery,setGallery]= useState([require('../img/men/men1.jpeg'),require('../img/men/men2.jpeg'),require('../img/men/men1.jpeg'),require('../img/men/men4.jpeg')]);
    
    const [type, settype] = useState("all");
    useEffect(() => {
        settype(product_type);
        let pics=[require('../img/men/men1.jpeg'),require('../img/men/men2.jpeg'),require('../img/men/men1.jpeg'),require('../img/men/men4.jpeg')];
         if(product_type=="male"){
            pics=[require('../img/men/men1.jpeg'),require('../img/men/men2.jpeg'),require('../img/men/men1.jpeg'),require('../img/men/men4.jpeg')];
         }
         setGallery(pics);
    }, [product_type]);
    _renderItem = ({item, index}) => {
        return (
            <Card style={{padding:5,}}>
                <Card.Cover  source={item} style={{width:350,maxHeight:200,objectFit:'contain'}}/>
            </Card>
        );
    }

    _renderItem1 = ({item, index}) => {
        return (<Chip mode="outlined"  onPress={() => console.log('Pressed')}>{item}</Chip>
            );
    }
    

    return (
        <ScrollView style={{flex:1}}>
<View style={styles.contianer}>
            <View style={{marginTop:2,height:230}}>
                <Carousel
            ref={(c) => { this._carousel = c; }}
            data={gallery}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={width-50}
            />
           <View style={styles.headsection}>
            <Text style={{color:'black',fontSize:24,fontWeight:'bold',textAlign:'center'}}>Explore Categories</Text>
           <Carousel
            ref={(c) => { this._carousel = c; }}
            data={cats}
            renderItem={_renderItem1}
            sliderWidth={width}
            itemWidth="80"
            />
           
           </View> 
           
        </View>
        <View style={{height:1200,display:'flex',flexDirection:'column',marginTop:10}}>
    <Surface elevation={5} style={{height:60}}>
   <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignContent:'center',alignItems:'center',height:70}}>
     <View style={{marginLeft:5}}>
     <Text style={{color:'black',fontSize:25,fontWeight:'bold'}}>Popular</Text>
     </View>
     <View style={{marginLeft:30,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
     <Text style={{color:'black',marginLeft:10}}>Top</Text>
     <Text style={{color:'black',marginLeft:10}}>New</Text>
     <Text style={{color:'black',marginLeft:10}}>New</Text>
     </View>
     
   </View>
  </Surface>
  
  
  <Productlist category={type} />
</View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    contianer:{
        display:'flex' ,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'center',
    },
    ml:{
        marginLeft:5
    },
    
    headsection:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        height:80,
        marginTop:5,
        alignContent:'center',
        alignItems:'center',
        textAlign:'center'
        
    },
    headsection1:{
        marginTop:50
        
    }
})

export default Products;
