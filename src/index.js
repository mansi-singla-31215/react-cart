import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/firestore";
// import  initializeApp  from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyCPKZzz4WLxG4RyCYlqoT7_75CQ8a2Z8X0",
    authDomain: "cart-3deff.firebaseapp.com",
    projectId: "cart-3deff",
    storageBucket: "cart-3deff.appspot.com",
    messagingSenderId: "561103027755",
    appId: "1:561103027755:web:8280936ac8ba08c881746e"
  };
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  firebase.initializeApp(firebaseConfig);
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  


  // export default {db};





