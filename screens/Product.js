import React,{useEffect,useState} from 'react';
import {View, StyleSheet,SafeAreaView,ScrollView,Text,useWindowDimensions,TouchableOpacity} from 'react-native';
import { Avatar,TextInput,Surface,Searchbar,Chip,Card,ActivityIndicator, MD2Colors,Button,Badge } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';
import Carousel from 'react-native-snap-carousel';
const Product = ({route,navigation}) => {
    const { width } = useWindowDimensions();
    const {pid}=route.params;
    const [product, setproduct] = useState({});
    const [load, setload] = useState(false);
    const [category, setcategory] = useState("");
    const [relProducts, setrelProducts] = useState([]);
    const tagsStyles = {
        p: {
          whiteSpace: 'normal',
          color: 'black',
          fontSize:16
        },
        a: {
          color: 'blue'
        },
        h1: {
            color: 'green'
          }
      };
    useEffect(() => {
        setload(true);
        loadProducts(pid);
    }, [route.params]);
    const loadProducts=(pid)=>{
        
        var myHeaders = new Headers();
    myHeaders.append("X-Authorization", "sk_test_547383f4802e9ccea377c72983e97f6cdefb08ddd3445");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };


    fetch("https://api.chec.io/v1/products/"+pid, requestOptions)
    .then(response => response.json())
    .then(result =>{ 
        setproduct(result);
        setload(false);
        if(result.categories.length){
            setcategory(result.categories[0].slug);
            loadRelatedProducts(result.categories[0].slug)
        }
        
    })
    .catch(error => console.log('error', error));
}
_renderItem = ({item, index}) => {
    return (
        <Card style={{padding:5}}>
            {  <Card.Cover  source={{uri:item.image.url}} style={{width:350,maxHeight:200,objectFit:'contain'}}/>}
            <View style={{display:'flex',flexDirection:'row',}}>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Product",{pid:item.id})}><Text style={{color:'black',fontSize:18,fontWeight:600}}>{item.name}</Text></TouchableOpacity>
            <Text  style={{color:'black', marginLeft:10}}>{item.price.formatted_with_symbol}</Text>
            </View>
            
        </Card>
    );
}
const loadRelatedProducts=(cat)=>{
if(typeof cat!='undefined'){
    var myHeaders = new Headers();
myHeaders.append("X-Authorization", "sk_test_547383f4802e9ccea377c72983e97f6cdefb08ddd3445");
var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};


fetch("https://api.chec.io/v1/products?category_slug="+cat, requestOptions)
.then(response => response.json())
.then(result =>{ 
    setrelProducts(result.data);
    
    //setload(false);
    
    
})
.catch(error => console.log('error', error));
}
    
}
    return (
        <SafeAreaView>
            <ScrollView>
               <View style={{flex:1,display:'flex',flexDirection:'column',width:width}}>
               {load && <ActivityIndicator animating={true} color={MD2Colors.red800} />}
                 {Object.keys(product).length>0 && <Card>
                    <Card.Content>
                <Card.Cover source={{uri:product.image.url}} />
                <View style={{display:'flex',flexDirection:'row',alignContent:'center',alignItems:'center'}}>
                    <View style={{display:'flex',flexDirection:'column'}}>
                    <Text style={{fontSize:30,color:'black',fontWeight:600,textAlign:'center'}}>{product.name}</Text>
                    {product.categories.length && <Text style={{fontSize:15,color:'black',fontWeight:300,textAlign:'left'}}>{product.categories[0].name}</Text>}
                    </View>
                    <Chip style={{fontSize:30,color:'black',fontWeight:600,marginLeft:60,height:40}}>{product.price.formatted_with_symbol}</Chip>
                  
                </View>
                    
                    <RenderHtml
      contentWidth={width}
      source={{html:product.description}}
      tagsStyles={tagsStyles}
    />
                </Card.Content>
               
                </Card>}
                <View>
                
                </View>
                {relProducts.length>0 && <View style={{backgroundColor:'white',marginTop:50}}>
                <Text style={{color:'black',fontSize:22,textAlign:'center',fontWeight:600}}>Related Products</Text>
           <Carousel
            ref={(c) => { this._carousel = c; }}
            data={relProducts}
            renderItem={_renderItem}
            sliderWidth="400"
            itemWidth="336"
            />
                </View>}
                
                </View> 
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Product;
