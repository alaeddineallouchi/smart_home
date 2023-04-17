import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text,Avatar,Title,Caption,Drawer} from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { actionLogOut } from '../redux/actions/actionAuth';
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';
import { useDispatch } from 'react-redux';





const CustomDrawerContent = (props) => {

    const dispatch = useDispatch();

  const [lastName, setLastName] = useState('');
  const [jour, setJour] = useState('');
  const [mois, setMois] = useState('');
  const [annee, setAnnee] = useState('');
  const [num, setNum] = useState('');
  const [firstName, setFirstName] = useState('');
  const [profilImage, setProfilImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
  const [isAuth, setIsAuth] = useState(false);

  const fetchData=async(userId)=>{
    const firebaseResp=await fetch(`https://pfee-3c043-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`);
    const  fetchedData=await firebaseResp.json();
    setLastName(fetchedData.lastName);
    setFirstName(fetchedData.firstName);
    setNum(fetchedData.num);
    setAnnee(fetchedData.annee);
    setNum(fetchedData.num);
    setJour(fetchedData.jour);
    setMois(fetchedData.mois);
    setProfilImage(fetchedData.profilImage);
    setIsAuth(true);

  }


  const handleLogOut=async()=>{
    dispatch(actionLogOut());//vider Redux 
    try {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    } catch (error) {
        alert(error)
    }
  }

  const load=async()=>{
    try {
        let jsonValue=await AsyncStorage.getItem('userProfilInfos');
        if(jsonValue !== null){
            let user=JSON.parse(jsonValue);
            /*{
            userId:userId,
            firstName:firstName,
            lastName:lastName,
            profilImage:profilImage
        } */

        const userId=user.userId;
        fetchData(userId);

        }

    } catch (error) {
        Alert.alert(
            'Erreur',
            'Probleme de connexui resseyer svp!',
            [{text:'ok',onPress:()=>props.navigation.navigate('Login')}]
        )
    }
  }
  useEffect(() => {
   load();
  }, [])


  

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContentContainer}>
                    <View style={styles.userInfoContainer}>
                            { 
                            isAuth?
                            <View style={styles.userInfoDetails}>
                            <Avatar.Image
                                source={{uri: profilImage}}
                                size={90}
                            />
                            <View style={styles.name}>
                                <Title style={styles.title}>{firstName} {lastName}</Title>
                                <Caption style={styles.caption}>@La maison inteligente </Caption>
                            </View>
                        </View> :<ActivityIndicator size="large" color={globalStyles.orangee}/>
                        }
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label="Profil"
                            icon={({color, size}) => <MaterialIcons name="face" size={size} color={color} />}
                            onPress={() => props.navigation.navigate('Profil',{
                                firstName:firstName,
                                lastName:lastName,
                                profilImage:profilImage,
                                num:num,
                                jour:jour,
                                annee:annee,
                                mois:mois
                            }) }
                        />

                        <DrawerItem 
                            label="systeme de securite "
                            icon={({color, size}) =>  <MaterialIcons name="security" size={size} color={color} />}
                            onPress={() => props.navigation.navigate('Listes') }
                        />

                        <DrawerItem 
                            label="camera de surveillance"
                            icon={({color, size}) => <MaterialIcons name="camera-alt" size={size} color={color} />}
                            onPress={() => props.navigation.navigate('Sujets') }
                        />

                        <DrawerItem 
                            label="Temperateur"
                            icon={({color, size}) => <FontAwesome5 name="temperature-high" size={size} color={color} />
                           }
                            onPress={() => props.navigation.navigate('Signets') }
                        />


                    </Drawer.Section>

                   
                </View>    
            </DrawerContentScrollView>

            <Drawer.Section style={styles.logOutSection}>
                <DrawerItem 
                    label="Déconnexion"
                    icon={({color, size}) => <MaterialIcons name="logout" size={size} color={color}
                    onPress={handleLogOut} />}
                    
                />
            </Drawer.Section>
        </View>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: { flex: 1},
    drawerContentContainer: {flex: 1},
    userInfoContainer: { paddingLeft: 20},
    userInfoDetails: {marginTop: 15},
    name: {
        marginTop: 15,
        justifyContent: 'center'
    },
    title: {
        fontSize: 19,
        marginTop: 5,
        fontWeight: 'bold'
    },
    caption: { fontSize: 15 },
   
    paragraph: {
        fontWeight: 'bold'
    },
    drawerSection: {
        marginTop: 19,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc'
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    logOutSection: {
        marginBottom: 19,
        borderTopWidth: 0.5,
        borderTopColor: "#ccc"
    }
})