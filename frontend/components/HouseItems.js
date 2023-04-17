import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const HouseItems = (props) => {
  return (
    <View style={styles.houseContainer}>
    <View style={styles.imageContainer}>
      <Image 
      source={{uri:props.image}}
      style={styles.image}/>
    </View>
    <View style={styles.roomContainerDetails}>
        <Text style={styles.roomTitle}>{props.title}</Text>
      </View>

      <View style={styles.iconsContainer}>  
      <TouchableOpacity 
    >
      <MaterialIcons name="remove-red-eye" size={35} color={globalStyles.white} />
      </TouchableOpacity>

      <TouchableOpacity
      >
      <Entypo name="resize-full-screen" size={35} color={globalStyles.white} />
      </TouchableOpacity>

      </View>

    </View>
  )
}



const styles = StyleSheet.create({

  houseContainer:{
    backgroundColor:globalStyles.twitter,
    borderRadius:10,
    height:300,margin:25,
    borderBottomColor:globalStyles.lightGrey,
    opacity: 0.9
    
  },
  imageContainer:{
    width:'100%',height:'60%',
    borderRadius:15,
    
  },
  image:{
    width:'100%',height:'100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10


  },
  roomContainerDetails:{
    alignItems:'center',
    height:'20%',
    padding:10
},

    roomTitle:{
        fontSize:18,
        marginVertical:4,
        color:globalStyles.white,
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    iconsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:'20%',
      paddingHorozintal:30
  }
})


export default HouseItems;