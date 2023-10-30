import React ,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,Image,SafeAreaView,Alert,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,ActivityIndicator, MD2Colors,Button,Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Item = ({title,id,price,image,key,cats}) => { 
    const navigation = useNavigation();
    return(
    <Card style={{backgroundColor:'transparent'}}>
    <Card.Content>
       <View style={{display:'flex',flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>navigation.navigate("Product",{pid:id})}><Card.Cover  source={{uri:image.url}} style={{height:130,width:150,}}  /></TouchableOpacity>
          
          <Card.Content style={{width:200}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Product",{pid:id})}>
                <Card.Title title={title}  subtitle={(cats.length>0) ? cats[0].name :''} textStyle={{color:'red',fontSize:24,fontWeight:'bold'}}  />
                </TouchableOpacity>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
           <Badge>{price.formatted_with_symbol}</Badge>
           <Button icon="cart" mode="contained" onPress={() => console.log('Pressed')}>Add</Button>
           <Text><Icon name="heart" size={30} color="#900" /></Text>

            
           </View>
            
            </Card.Content>
            
       </View>
    </Card.Content>
  </Card>
  );}

const Productlist = ({category,key}) => {
     const [products, setproducts] = useState([]);
     const [isFetching, setisFetching] = useState(false);
     const [load, setload] = useState(false);
     useEffect(() => {
        setload(true);
        setproducts([]);
        loadProducts(category);
     }, [category]);

    const  onRefresh=() =>{
        setload(true);
        setisFetching(true);
        setproducts([]);
        loadProducts(category);
    }
    const loadProducts=(category)=>{
        
        var myHeaders = new Headers();
    myHeaders.append("X-Authorization", "sk_test_547383f4802e9ccea377c72983e97f6cdefb08ddd3445");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };


    fetch("https://api.chec.io/v1/products?category_slug"+category, requestOptions)
    .then(response => response.json())
    .then(result =>{ setproducts(result.data);setisFetching(false); setload(false);})
    .catch(error => console.log('error', error));
}
    return (
        <SafeAreaView style={styles.container}>
            {products.length==0 && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
            <Text style={{color:'black'}}>{products.length}</Text>
      {(products.length || !load)>0 && <FlatList
        data={products}
        renderItem={({item}) => <Item title={item.name} id={item.id} price={item.price} image={item.image} key={item.id} cats={item.categories} />}
        keyExtractor={item => item.id}
        onRefresh={() => onRefresh()}
    refreshing={isFetching}
      />}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Productlist;
