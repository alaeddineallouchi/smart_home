import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';

const WaitScreen = () => {
  return (
    <LinearGradient 
    colors={["#1A91DA", "#fffafa"]}
    style={styles.container}
>
      <Text style={styles.text}>Patientez....</Text>
      <ActivityIndicator
      size='large'
      color={globalStyles.orangee}

      />
    </LinearGradient>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:globalStyles.twitter
    },
    text:{
        color:globalStyles.orangee,
        fontSize:25,
        textAlign:'center',
        marginBottom:30
    }
})


export default WaitScreen