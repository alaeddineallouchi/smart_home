import { StyleSheet, Text, TextInput, View,TouchableOpacity ,Pressable,Alert,ActivityIndicator} from 'react-native';
import React,{useState,useLayoutEffect,useEffect} from 'react';
import globalStyles from '../styles/globalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { actionSignup, actionLogin, actionVerifyEmail, getUsersData } from '../redux/actions/actionAuth';

import WaitScreen from './WaitScreen';
import { parse } from 'uuid';


 const Login = ({navigation}) => {
 const dispatch = useDispatch();
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [passwordCf, setPasswordCf] = useState('');
 const [isSignup, setIsSignup] = useState(true);
 const [error, setError] = useState();
 const [isLoading, setIsLoading] = useState(false);
 const [isAuth, setIsAuth] = useState(false);

 const confirmationMotDePasse =()=>{

    if(password===passwordCf){
        return password ;
    }else {
        alert("verifier le mot de passe ")
        password="";
        }
 }

 const load= async()=>{
    const userDetailsStr= await AsyncStorage.getItem('userDetails');
    if(userDetailsStr !== null){
        const userDetailsObj=JSON.parse(userDetailsStr);
        const {token,userId,dateTokenExpire}=userDetailsObj;
        const expireDate=new Date(dateTokenExpire);
        console.log(userId)
    
        if(expireDate <= new Date()|| !token || !userId){
            setIsAuth(true);
            return;
        }
        console.log('connexion')
        navigation.navigate("Home");
        setIsAuth(true);
     }else{
        setIsAuth(true)
     }
    }

 useLayoutEffect(() => {

        load();
  
 }, [])

 useEffect(() => {
   
   if(error !=null){
    Alert.alert(
        'Erreur',
         error,
        [{text:'Ok'}]
    )
   }
    }, [error])

 const handleSubmit=async()=>{
    
    if(email.length >0 && password.length>0 ) {
       if(isSignup){
        console.log('Inscription');
        confirmationMotDePasse(password);
        setError(null);
        setIsLoading(true);


        try {
           await dispatch(actionSignup(email,password));
           userDetails = await AsyncStorage.getItem("userDetails")
           token = JSON.parse(userDetails).token
           await dispatch(actionVerifyEmail(token))
           
           verif = await dispatch(getUsersData(token, email))
           test = verif[0].emailVerified
           console.log(test)
           
           while(true){
            verif = await dispatch(getUsersData(token, email))
            test = verif[0].emailVerified
            if (test){
                break
            }
           }

           navigation.replace("ProfilInfos")

        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }

       }else if(email.length >0 && password.length>0){
        
        
        setError(null);
        setIsLoading(true);

        try {
           await dispatch(actionLogin(email,password));
           navigation.navigate("Home")
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }

       }

    } else{alert("Probléme de connexion :Verifier l adresse ou le mot de passe ")}
     

 }
    if(isAuth){
        return (
            <LinearGradient 
            colors={["#1A91DA", "white"]}
            style={styles.container}
            >
        
              <View style={styles.logo}> 
        
              {
        
                isLoading? <View>
                    <Text style={{fontSize:20,color:globalStyles.orangee}}> Patientez...</Text>
                    <ActivityIndicator size="large" color={globalStyles.orangee}/>
                </View>
                :  <MaterialCommunityIcons name="home-automation" size={100} color={globalStyles.white} />
                
              }
             
              </View>
              { 
              !isSignup?
                  <View style ={styles.inputContainer}> 
                  <Text style={styles.text}>  {isSignup? "Inscription":'Connexion'} </Text>
            
                  <TextInput
                    placeholder='email'
                    style={styles.input}
                    onChangeText={text=>setEmail(text)}
                    keyboardType='email-address'
                    
                  />
            
                  <TextInput
                    placeholder='mot de passe '
                    style={styles.input}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry
                    
                  />        
            
                    <TouchableOpacity 
                    style={styles.touchable}
                    onPress={handleSubmit}
                    >
                        <View style={styles.btnContainer}>
                            <Text style={styles.btnText}> connecter   </Text>
                        </View>
                    </TouchableOpacity>
                    <Pressable
                    onPress={()=>setIsSignup(prevState=>!prevState)}>
            
                        <Text style={{textAlign:'center',marginTop:9,color:globalStyles.orangee}}> 
                        
                            {isSignup? " Vers Connexion":' Vers Inscription'}
            
                         </Text>
            
                    </Pressable>
                  </View>
              :
                <View style ={styles.inputContainer}> 
                <Text style={styles.text}>  {isSignup? "Inscription":'Connexion'} </Text>
          
                <TextInput
                  placeholder='email'
                  style={styles.input}
                  onChangeText={text=>setEmail(text)}
                  keyboardType='email-address'
                  
                />
          
                <TextInput
                  placeholder='mot de passe '
                  style={styles.input}
                  onChangeText={text=>setPassword(text)}
                  secureTextEntry
                  
                />        
                 <TextInput
                  placeholder='confirmer le mot de passe '
                  style={styles.input}
                  onChangeText={text=>setPasswordCf(text)}
                  secureTextEntry
                  
                />   
          
                  <TouchableOpacity 
                  style={styles.touchable}
                  onPress={handleSubmit}
                  >
                      <View style={styles.btnContainer}>
                          <Text style={styles.btnText}> connecter   </Text>
                      </View>
                  </TouchableOpacity>
                  <Pressable
                  onPress={()=>setIsSignup(prevState=>!prevState)}>
          
                      <Text style={{textAlign:'center',marginTop:9,color:globalStyles.orangee}}> 
                      
                          {isSignup? " Vers Connexion":' Vers Inscription'}
          
                       </Text>
          
                  </Pressable>
                </View>
              }
        
            
            </LinearGradient>
          )

    }
    return(<WaitScreen/>)
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
       
    }
})

export default Login;