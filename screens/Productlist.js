import React ,{useState,useEffect,useContext} from 'react';
import {View, Text,StyleSheet,FlatList,Image,SafeAreaView,Alert,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,ActivityIndicator, MD2Colors,Button,Badge,useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MyContext } from '../mycontext';
const Item = ({title,id,price,image,cats}) => { 
  const { text,cart,settext,setCart } = useContext(MyContext);
  const theme = useTheme();
    const navigation = useNavigation();
    const ADD_CART=(id,title,image,price)=>{
          let cart1=cart;
          const ind=cart1.findIndex((it)=>it.id=id);
           if(ind>-1){
              cart1[ind].q=cart1[ind].q+1;
           }else{
            cart1.push({id,title,price,q:1,image});
           }
          
          setCart(cart1);
    }
    return(
    <Card style={{backgroundColor:theme.colors.background}}>
    <Card.Content>
       <View style={{display:'flex',flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>navigation.navigate("Product",{pid:id})}><Card.Cover  source={{uri:image.url}} style={{height:130,width:150,}}  /></TouchableOpacity>
          
          <Card.Content style={{width:200}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Product",{pid:id})}>
                <Card.Title title={title}  subtitle={(cats.length>0) ? cats[0].name :''} textStyle={{color:theme.colors.primary,fontSize:24,fontWeight:'bold'}}  />
                </TouchableOpacity>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
           <Badge>{price.formatted_with_symbol}</Badge>
           <Button icon="cart" mode="contained" onPress={() => {ADD_CART(id,title,image,price)}}>Add</Button>
           <Text><Icon name="heart" size={30} color="#900" /></Text>

            
           </View>
            
            </Card.Content>
            
       </View>
    </Card.Content>
  </Card>
  );}

const Productlist = ({category}) => {
     const [products, setproducts] = useState([]);
     const [isFetching, setisFetching] = useState(false);
     const [load, setload] = useState(false);
     
    // Alert.alert(category)
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

    let url="https://api.chec.io/v1/products?category_slug"+category;
    if(category="all"){
      url="https://api.chec.io/v1/products";
    }
    fetch(url, requestOptions)
    .then(response => response.json())
    .then(result =>{ setproducts(result.data);setisFetching(false); setload(false);})
    .catch(error => console.log('error', error));
}
    return (
        <SafeAreaView style={styles.container}>
            {products.length==0 && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
          
      {(products.length || !load)>0 && <FlatList
        data={products}
        renderItem={({item}) => <Item title={item.name} id={item.id} price={item.price} image={item.image}  cats={item.categories} />}
        keyExtractor={item => item.id}
        onRefresh={() => onRefresh()}
    refreshing={isFetching}
      />}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Productlist;
