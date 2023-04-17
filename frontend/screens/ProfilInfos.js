import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity ,ActivityIndicator, Image, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';
import { useDispatch } from 'react-redux';
import { setUserInfos } from '../redux/actions/actionUserInfos';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native';



const ProfilInfos = ({navigation}) => {

    const dispatch = useDispatch();

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [profilImage, setProfilImage] = useState('');
    
    const [jour, setJour] = useState('');
    const [mois, setMois] = useState('');
    const [annee, setAnnee] = useState('');
    const [num, setNum] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    

    
    
    const pickImage=async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
           
            quality: 0.5,
          });
          console.log(result)
          
    if (!result.cancelled) {
        setProfilImage(result.assets[0].uri);
      }
    }
  



    const handleSubmit=async()=>{

        if(lastName.length>0 && firstName.length>0  && profilImage.length>0 && mois.length >0 && jour.length >0 && annee.length >0 && num>0){
            setIsLoading(true);

            await dispatch(setUserInfos(firstName,lastName,profilImage,annee,jour,mois,num));
            //vers Home 
            navigation.replace('Home');

        } else {
            alert("veuiller remplir tous les champs ! ")
        }



    }

  return (

    <LinearGradient 
    colors={["#1A91DA", "white"]}
    style={styles.container}
    >   
   

      <View style ={styles.inputContainer}> 
      <ScrollView>
      <Text style={styles.text}> Indiquer vos Informations</Text>

      <TextInput
        placeholder='Nom'
        style={styles.input}
        onChangeText={text=>setLastName(text)}
       
        
      />

      <TextInput
        placeholder='prénom'
        style={styles.input}
        onChangeText={text=>setFirstName(text)}

      />

        <View style={{flexDirection:'row',   justifyContent: 'space-between', alignItems: 'center',}}>
        <TextInput
            style={[styles.input1, styles.firstInput]}
            placeholder="jour"
            onChangeText={text => setJour(text)}
            value={jour}
            keyboardType="numeric"
            maxLength={2}
  />
          <TextInput
            style={[styles.input1, styles.lastInput]}
            placeholder="mois"
            onChangeText={text => setMois(text)}
            value={mois}
            keyboardType="numeric"
            maxLength={2}
          />
          <TextInput
            style={[styles.input1, styles.middleInput]}
            placeholder="année"
            onChangeText={text => setAnnee(text)}
            value={annee}
            keyboardType="numeric"
            maxLength={4}
          />
      </View>

        <TextInput
            placeholder='numéro de téléphone '
            style={styles.input}
            onChangeText={text=>setNum(text)}
            keyboardType='numeric'
            maxLength={8}

      />  

        {/* photo picker */ }
        <View style={styles.photoContainer}>
        <View style={styles.wrapper}>
            <Image 
            style={styles.photo}
            source={{uri:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}}/>
        </View>
        <Button 
        title='Sélectionner une photo ' 
        color={globalStyles.orangee}
        onPress={pickImage}/>
        </View>

        

         {

            isLoading? 
            <ActivityIndicator
            size="large"
            color={globalStyles.orangee}
            />
            : <TouchableOpacity 
                style={styles.touchable}
                 onPress={handleSubmit}
                  >
                <View style={styles.btnContainer}>
                    <Text style={styles.btnText}> connecter   </Text>
                </View>
            </TouchableOpacity>


         }

    </ScrollView>

      </View>
      

    </LinearGradient>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },logo:{
        marginBottom:50,

    },
    inputContainer:{
        width:'100%',
        paddingHorizontal:50,

    },
    input1: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 8,
      width: '30%',
      marginHorizontal: 5,
      textAlign: 'center',
    },
    firstInput: {
      marginLeft: 0,
    },
    lastInput: {
      marginRight: 0,
    },
    middleInput: {
      marginHorizontal: 0,
    },
    input:{
        backgroundColor:globalStyles.input,
        borderRadius:25,
        padding:9,marginVertical:10,
        textAlign:'center',
        fontSize:15
    },
    touchable:{
        marginVertical:9,
    },text:{
        fontSize:25,
        textAlign:'center',
        color:globalStyles.orangee,
    },
    btnContainer:{
        backgroundColor:globalStyles.btn,
        borderRadius:7,
        padding:9,
        alignItems:'center',
        justifyContent:'center',

    },
    btnText:{
        fontSize:12,
        color:globalStyles.white,
        textTransform:'uppercase'
       
    },
    photoContainer:{
        alignItems:'center'
    },
    wrapper:{
        width:'100%',
        height:300,
        justifyContent:'center',
        alignItems:'center',
        borderColor:globalStyles.white,
        borderWidth:1,
        marginBottom:9
    },
    photo:{
        width:'100%', height:'100%'
    }
})

export default ProfilInfos