import React ,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,ActivityIndicator, MD2Colors,Button,Badge } from 'react-native-paper';
import Productlist from './Productlist';


const Products = ({route}) => {
    const [cats,setcats]=useState(['Coats','Jackets','Trowsers','Tshirts',"Winter","Summer"]);
    const [gallery,setGallery]= useState([require('../img/men/men1.jpeg'),require('../img/men/men2.jpeg'),require('../img/men/men1.jpeg'),require('../img/men/men4.jpeg')]);
    const {product_type}=route.params;
    const [type, settype] = useState("men");
    useEffect(() => {
        settype(product_type);
        let pics=[require('../img/men/men1.jpeg'),require('../img/men/men2.jpeg'),require('../img/men/men1.jpeg'),require('../img/men/men4.jpeg')];
         if(product_type=="male"){
            pics=[require('../img/men/men1.jpeg'),require('../img/men/men2.jpeg'),require('../img/men/men1.jpeg'),require('../img/men/men4.jpeg')];
         }
         setGallery(pics);
    }, [route.params]);
    _renderItem = ({item, index}) => {
        return (
            <Card style={{padding:5,}}>
                <Card.Cover  source={item} style={{width:350,maxHeight:200,objectFit:'contain'}}/>
            </Card>
        );
    }
    

    return (
        <View style={styles.contianer}>
            <View style={{marginTop:2,height:230}}>
                <Carousel
            ref={(c) => { this._carousel = c; }}
            data={gallery}
            renderItem={_renderItem}
            sliderWidth="400"
            itemWidth="336"
            />
           <View style={styles.headsection}>
            <Chip  style={styles.ml} onPress={() => settype('mane')} selectedColor="black">Shirt/Tshirt</Chip>
            <Chip style={styles.ml} onPress={() => settype('kids')} selectedColor="black">Trousers</Chip>
            <Chip style={styles.ml} onPress={() => console.log('Pressed')} selectedColor="black">Summer</Chip>
            <Chip  style={styles.ml} onPress={() => console.log('Pressed')} selectedColor="black">Winter</Chip>
           </View> 
           
        </View>
        <View style={{height:1800,display:'flex',flexDirection:'column'}}>
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
  
  
  <Productlist category={type} key={type} />
</View>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer:{
        display:'flex' ,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignContent:'center',
        flex:1
    },
    ml:{
        marginLeft:5
    },
    
    headsection:{
        display:'flex',
        flexDirection:'row',
        height:50,
        marginTop:5,
        alignContent:'center'
        
    },
    headsection1:{
        marginTop:50
        
    }
})

export default Products;
