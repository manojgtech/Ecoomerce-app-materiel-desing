/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { createContext,useState } from 'react';
import {name as appName} from './app.json';
import {PaperProvider}  from 'react-native-paper';
import { MyContext } from './mycontext';


  
const  FApp=()=>{
    const [text, settext] = useState("");
    const [cart, setCart] = useState([]);
    return(<PaperProvider theme={{ version: 2 }}>
              <MyContext.Provider value={{text,cart,settext,setCart}}>
            <App />
            </MyContext.Provider>
    </PaperProvider>);
    }
AppRegistry.registerComponent(appName, () => FApp);
