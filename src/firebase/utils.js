import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage=firebase.storage();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const handleUserProfile = async (userAuth, usertype, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;
  let userRef;
  if (usertype == 1) {
    userRef = db.doc(`users/${uid}`);
  } else {
    userRef = db.doc(`doctors/${uid}`);
  }
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    // else doesn't exist  so create a new user
    const { email } = userAuth;
    const timesTamp = new Date();
    //const userRoles = ['user'];
    const userRoles =
      email === "mera.saber@yahoo.com" ? ["user", "admin"] : "user";
    try {
      await userRef.set({
        email,
        createDate: timesTamp,
        userRoles,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) {
    return false;
  }
  const { userRoles } = currentUser;
  if (userRoles.includes("admin")) {
    return true;
  } else {
    return false;
  }
};
