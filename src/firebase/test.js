import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Xj3n14u63bXNxLwdfT2J")
  .collection("cartItems")
  .doc("6y441q5tKjGMQKihuIgH");
firestore.doc("/users/Xj3n14u63bXNxLwdfT2J/cartItems/6y441q5tKjGMQKihuIgH");