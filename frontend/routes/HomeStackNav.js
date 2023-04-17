import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 
import Home from '../screens/Home';
import Portfolio from '../screens/Portfolio';
import Listes from '../screens/Listes';
import Sujets from '../screens/Sujets';
import Signets from '../screens/Signets';

import Chambre from '../screens/Chambre';
import Sallon from '../screens/Sallon';
import Toillet from '../screens/Toillet';
import Cuisine from '../screens/Cuisine';
import Jardin from '../screens/Jardin';
import Garage from '../screens/Garage';
import Gaz from '../screens/Gaz'; 
import Mouvement from '../screens/Mouvement';
import Fummer from '../screens/Fummer';
import Temp from '../screens/Temp';


const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                
                headerLeft: () => (
                    <MaterialIcons 
                       name="menu" 
                       size={24} 
                       color="black" 
                       onPress={() => navigation.openDrawer() }
                    />
                )
            }}
        >
            <HomeStack.Screen name="Home" component={Home} options={{title: "Acceuil"}} />
            <HomeStack.Screen name="Profil" component={Portfolio} />
            <HomeStack.Screen name="Listes" component={Listes} options={{title:'systéme de secutité'}} />
            <HomeStack.Screen name="Sujets" component={Sujets}  options={{title:'camera de surveillance'}} />
            <HomeStack.Screen name="Signets" component={Signets} options={{title:'Temperateur'}} />
   
            <HomeStack.Screen name="Chambre" component={Chambre} />
            <HomeStack.Screen name="Sallon" component={Sallon} />
            <HomeStack.Screen name="Toillet" component={Toillet} />
            <HomeStack.Screen name="Cuisine" component={Cuisine} />
            <HomeStack.Screen name="Jardin" component={Jardin} />
            <HomeStack.Screen name="Garage" component={Garage} />
            <HomeStack.Screen name="Mouvement" component={Mouvement} />
            <HomeStack.Screen name="Fummer" component={Fummer} />
            <HomeStack.Screen name="Gaz" component={Gaz} />
            <HomeStack.Screen name="Temp" component={Temp} />
        </HomeStack.Navigator>   
    )
}

export default HomeStackScreen;