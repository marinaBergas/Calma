import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from './config';


firebase.initializeApp(firebaseConfig)



export const  auth = firebase.auth();
export const db = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  GoogleProvider.setCustomParameters({prompt:'select_account'});


export const handleUserProfile = async (userAuth,additionalData)=>{
    //userAuth/additionalData object from google
    if(!userAuth) return ;
    const {uid} = userAuth;
    //firebase request
    const userRef = db.doc(`users/${uid}`);
    // fetch/read the data from firebase
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        // else doesn't exist  so create a new user
        const {displayName,email,photoURL} = userAuth;
        const timesTamp = new Date();
        //const userRoles = ['user'];
        const userRoles = (email ==='mera.saber@yahoo.com')?['user','admin']:'user';
        try{
            await userRef.set({
                displayName,
                email,
                photoURL,
                createDate : timesTamp,
                userRoles,
                ...additionalData
            })

        } catch(err){
        console.log(err)
      }
  
    }
    return userRef;
};

export const checkUserIsAdmin = currentUser=>{
  if(!currentUser||!Array.isArray(currentUser.userRoles)){
    return false
  }
  const {userRoles}=currentUser
  if(userRoles.includes('admin')){
    return true
  }else{
    return false
  }
}

