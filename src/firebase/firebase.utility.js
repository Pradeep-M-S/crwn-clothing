import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBDu5DQWW39tI5mkIWu00mOvbVkHhR2uTw",
  authDomain: "crwn-db-pms.firebaseapp.com",
  databaseURL: "https://crwn-db-pms.firebaseio.com",
  projectId: "crwn-db-pms",
  storageBucket: "crwn-db-pms.appspot.com",
  messagingSenderId: "1041485961116",
  appId: "1:1041485961116:web:45a8077f3b8585ed6c1a59",
  measurementId: "G-8P3PVV7DJC",
};

export const createUserProfileDocument = async (
  userAuth,
  ...additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        additionalData,
      });
    } catch (e) {
      console.log("Error creating User", e);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
