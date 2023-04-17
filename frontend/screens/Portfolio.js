import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';


const Portfolio = ({ navigation, route }) => {



const { firstName, lastName, profilImage, jour,mois,annee,num } = route.params;

const handlePress = () => {
navigation.navigate('Home');
};

    return (
        <View style={styles.container}>
                    <View style={styles.profilInfos}>
                    <Image
                    source={{uri:profilImage}}
                    style={styles.smallProfilImage}/>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:globalStyles.white,fontSize:20}}>prénom: </Text>
                    <Text style={styles.profilName}> {firstName}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:globalStyles.white,fontSize:20}}>nom: </Text>
                    <Text style={styles.profilName}> {lastName}</Text>
                    </View>


  

                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:globalStyles.white,fontSize:20}}>num de telephone :</Text>
                    <Text style={styles.profilName}> {annee} </Text>
                     </View>
                     <View style={{flexDirection:'row'}}>
                    <Text style={{color:globalStyles.white,fontSize:20}}>Date de naissance:</Text>
                    <Text style={styles.profilName}> {jour}/{mois}/{num}</Text>
                     </View>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
       
        flex: 1,
      
    },
    profilInfos:{
        backgroundColor:globalStyles.twitter,
        height:400,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    smallProfilImage:{
        width:150,height:150,
        borderRadius:150/2,
        margin:9,
        borderWidth:6,
        borderColor:globalStyles.white,
    },
    profilName:{
        color:globalStyles.orangee,
        fontSize:25
    }
   
})

export default Portfolio