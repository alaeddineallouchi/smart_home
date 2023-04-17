import React,{useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';
import { useDispatch } from 'react-redux';
import { setUserInfos } from '../redux/actions/actionUserInfos';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native';
import {Text,TouchableRipple,Switch} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Sallon = ({navigation}) => {

  const [portouvert, setPortouvert] = useState(false);
  const [lumiereallumer, setLumiereallumer] = useState(false);
  const [fenetreouvert, setFenetreouvert] = useState(false);
  const [rideauouvert, setRideauouvert] = useState(false);

  const etatDePorteSallon = () => {
    setPortouvert(!portouvert)
  }

  const etatDeLumiereSallon = () => {
    setLumiereallumer(!lumiereallumer)
  }

  const etatDeFenetreSallon = () => {
    setFenetreouvert(!fenetreouvert)
  }

  const etatDeRideauSallon  = () => {
    setRideauouvert(!rideauouvert)
  }







    



    

  return (

    <LinearGradient 
    colors={["#1A91DA", "white"]}
    style={styles.container}
    >   
   

      <View style ={styles.inputContainer}> 

      <Text style={{textAlign:'center',color:globalStyles.orangee,fontSize:25}}> hilahilaHop </Text>
     
      

 


  

      <TouchableRipple
        onPress={() => etatDePorteSallon()}
       >
         <View style={styles.settings}>
           <Text style={styles.text}> ouvrir et fermer de porte </Text>
           <View pointerEvents="none"  style={{flexDirection:'row'}}>
           <FontAwesome5 name="door-open" size={24} color="white" />
            <Switch value={portouvert} />
            <FontAwesome5 name="door-closed" size={24} color="mediumpurple" />
           </View>
         </View>
       </TouchableRipple>

       <TouchableRipple
        onPress={() => etatDeLumiereSallon()}
       >
         <View style={styles.settings}>
           <Text style={styles.text}>Allumer et eteindre de lumiere  </Text>
           <View pointerEvents="none" style={{flexDirection:'row'}}>
           <MaterialCommunityIcons name="alarm-light-off-outline" size={24} color="white" />
            <Switch value={lumiereallumer} />
            <MaterialCommunityIcons name="alarm-light-outline" size={24} color="mediumpurple" />
           </View>
         </View>
       </TouchableRipple>

       <TouchableRipple
        onPress={() => etatDeFenetreSallon()}
       >
         <View style={styles.settings}>
           <Text style={styles.text}>Ouvrir et fermer du fenetre  </Text>
           <View pointerEvents="none" style={{flexDirection:'row'}}>
           <MaterialCommunityIcons name="window-closed-variant" size={24} color="white" />
            <Switch value={fenetreouvert} />
            <MaterialCommunityIcons name="window-open-variant" size={24} color="mediumpurple" />
           </View>
         </View>
       </TouchableRipple>

       <TouchableRipple
        onPress={() => etatDeRideauSallon()}
       >
         <View style={styles.settings}>
           <Text style={styles.text}>Ouvrir et fermer de rideau  </Text>
           <View pointerEvents="none" style={{flexDirection:'row'}}>
           <MaterialCommunityIcons name="curtains-closed" size={24} color="white" />
            <Switch value={rideauouvert} />
            <MaterialCommunityIcons name="curtains" size={24} color="mediumpurple" />
           </View>
         </View>
       </TouchableRipple>

   

      </View>
      

    </LinearGradient>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },settings: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginVertical: 10,
    
    },text:{
        fontSize:20,
        textAlign:'center',
        color:globalStyles.white,
    }
})

export default Sallon;