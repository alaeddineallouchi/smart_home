export const INFO_USER='INFO_USER';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserInfos=(firstName,lastName,profilImage,num,jour,mois,annee)=>{

    const saveToAsyncStorage=async(userId,firstName,lastName,profilImage,num,jour,mois,annee)=>{
        await AsyncStorage.setItem("userProfilInfos",JSON.stringify({

                                userId:userId,
                                firstName:firstName,
                                lastName:lastName,
                                profilImage:profilImage,
                                num:num,
                                jour:jour,
                                mois:mois,
                                annee:annee,

        }))
    }

    return async(dispatch)=>{

                    //firebase Bd 
                    const firebaseResp=await fetch('https://pfee-3c043-default-rtdb.europe-west1.firebasedatabase.app/users.json',{
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            //ID fireBase
                            firstName:firstName,
                            lastName:lastName,
                            profilImage:profilImage,
                            num:num,
                            jour:jour,
                            mois:mois,
                            annee:annee,
                            
                        })
                    })

                    if(!firebaseResp.ok){
                        throw new Error('Oups,nous avons un probléme!');
                    }

                    
                    const userData=await firebaseResp.json();
                    //console.log(userData);  //onjet name:ID
                    /* Object  {"name": "-NSDPu0rKmtXdtk4kP2L"}*/ 

                    // dispatch 

                    dispatch(actionUserInfos(userData.name,firstName,lastName,profilImage,num,jour,mois,annee));

                    //AsyncStorage
                    saveToAsyncStorage(userData.name,firstName,lastName,profilImage,num,jour,mois,annee);

    }
}

const actionUserInfos=(userId,firstName,lastName,profilImage,num,jour,mois,annee)=>{
    return{
        type:INFO_USER,
        infos:{
            userId:userId,
            firstName:firstName,
            lastName:lastName,
            profilImage:profilImage, 
            num:num,
            jour:jour,
            mois:mois,
            annee:annee,
            
        }

    }
}