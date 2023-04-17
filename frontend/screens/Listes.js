import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

const Listes = ({navigation}) => {

    return (
       
                 <LinearGradient 
                colors={["#d2691e", "white","#d2691e"]}
                style={styles.container}
                >
          
            
            <TouchableOpacity onPress={()=>navigation.navigate('Mouvement')}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURUv2yQ1E1F8mIIKU6Mtj2kyutYnOdJ0M3w&usqp=CAU' }} style={styles.image} />
              <Text style={styles.title}>Mouvement </Text>
            </TouchableOpacity>
          
    
    
           
           <TouchableOpacity onPress={()=>navigation.navigate('Fummer')}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrsqDLhy-n0uwYWLA6oByDNtZueO92WW5SA&usqp=CAU' }} style={styles.image} />
              <Text style={styles.title}>fummer</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>navigation.navigate('Gaz')}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0ew_mcafMLzi_51x_1nsx8rGGzrQnb5ierEwsX680LrnfoAN5T3Rdgqd4jSJSPIB9O0&usqp=CAU' }} style={styles.image} />
              <Text style={styles.title}> Gaz</Text>
            </TouchableOpacity>
         
    
        </LinearGradient>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent:'center'

      },
      scrollViewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      imageContainer: {
        width: '49%',
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 150,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
      },
    });
    
    export default Listes;
    