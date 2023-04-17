import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from './routes/DrawerNav';
import store from "./redux/store";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { sqliteInit } from "./database/db";
import Login from "./screens/Login";
import ProfilInfos from "./screens/ProfilInfos";
import GeoLocation from "./screens/GeoLocation";



//Inialiser le bdd sqlite
sqliteInit().then(()=>{
  console.log('SQLite inialisée')
}).catch(err=>{console.log(err)})
const Stack=createStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="ProfilInfos" component={ProfilInfos} />
          <Stack.Screen name="GeoLocation" component={GeoLocation} />
          <Stack.Screen name="Home" component={DrawerNav} />
          </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}