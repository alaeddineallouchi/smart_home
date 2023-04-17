import { AUTH_USER,LOGOUT_USER } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Inscription
  export  const actionSignup = (email,password) =>{
    return async (dispatch)=>{
        //HTTP request 
         const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCAoOq-x0zDM8y8VHrnWpFADhB1xCVbxJk',{
            method:'POST',
            headers:{'Content-Type': 'application/json' },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })

         })
        //reponse
         if(! response.ok){
            //message d erreur
                 //message d erreur
                 const responseError=await response.json();
                 const errorMsg=responseError.error.message;
                 let customMsg="Oups, nous avons un probléme lors de l'inscription "
                 if(errorMsg === 'EMAIL_EXISTS' ){
                     customMsg="Cette adresse email existe déjà ! ";
                 }else if(errorMsg==='TOO_MANY_ATTEMPTS_TRY_LATER'  ){
                     customMsg="trop de tentatives,veuillez remplacer plus tards"
                 }
     
                 throw new Error(customMsg)
         }
         const dataObj=await response.json();
         //dispatch action 
         dispatch(actionAuthUser(dataObj.localId,dataObj.idToken))

         //AsyncStorage
         const expiresInMiliSec=parseInt(dataObj.expiresIn)*1000;
         const expireDate=new Date().getTime()+expiresInMiliSec;
         const dateTokenExire=new Date(expireDate).toISOString();

         saveToAsyncStorage(dataObj.idToken, dataObj.localId,dateTokenExire);
         //AsyncStorage.setItem("token", dataObj.idToken)
    }  
}

//connexion 
export  const actionLogin = (email,password) =>{


    return async (dispatch)=>{
        //HTTP request 
         const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCAoOq-x0zDM8y8VHrnWpFADhB1xCVbxJk',{
            method:'POST',
            headers:{'Content-Type': 'application/json' },
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            })

         })
        //reponse
         if(! response.ok){
            //message d erreur
            const responseError=await response.json();
            const errorMsg=responseError.error.message;
            let customMsg="Oups, nous avons un probléme lors de la connexion "
            if(errorMsg==='EMAIL_NOT_FOUND' ){
                customMsg="adresse email introuvable "
            }else if(errorMsg==='INVALID_PASSWORD'   ){
                customMsg="mot de passe incorrect"
            }

            throw new Error(customMsg)
         }
         const dataObj=await response.json();
           //dispatch action 
            dispatch(actionAuthUser(dataObj.localId,dataObj.idToken))
            //AsyncStorage
            const expiresInMiliSec=parseInt(dataObj.expiresIn)*1000;
            const expireDate=new Date().getTime()+expiresInMiliSec;
            const dateTokenExire=new Date(expireDate).toISOString();

            saveToAsyncStorage(dataObj.idToken,dataObj.localId,dateTokenExire);
    }
    
    
}

//deconnexion
export const  actionLogOut=()=>{
    return {
        type:LOGOUT_USER,
    }
}

//Enregistrer la data (token,userId,dateTokenExpire)dans AsyncStorage 
const saveToAsyncStorage = async(token,userId,dateTokenExpire)=>{
        await AsyncStorage.setItem("userDetails",JSON.stringify({
        token:token,
        userId:userId,
        dateTokenExpire:dateTokenExpire,
    }))
}

//Auth action 
const actionAuthUser=(userId,token)=>{
    return{
        type: AUTH_USER,
        userId:userId,
        token:token,
    }
}
//Validation de l'email
export const actionVerifyEmail = (idToken) => {
    return async (dispatch) => {
      //HTTP request
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCAoOq-x0zDM8y8VHrnWpFADhB1xCVbxJk`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: idToken,
          }),
        }
      );
      //reponse
      if (!response.ok) {
        //message d erreur
        const responseError = await response.json();
        const errorMsg = responseError.error.message;
        let customMsg = "Oups, nous avons un probléme lors de la validation de l'email";
  
        throw new Error(customMsg);
      }
    };
  };

export const getUsersData = (idToken, email) => {
  return async (dispatch) => {
    //HTTP request
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCAoOq-x0zDM8y8VHrnWpFADhB1xCVbxJk`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idToken: idToken,
        }),
      }
    );
    //reponse
    if (!response.ok) {
      //message d erreur
      const responseError = await response.json();
      const errorMsg = responseError.error.message;
      let customMsg = "Oups, nous avons un probléme lors de la validation de l'email";

      throw new Error(customMsg);
    } else {
      const obj = await response.json()
      obj2 = obj.users.filter(element => { return element.email === email })    
      return obj2
    }
  };
}