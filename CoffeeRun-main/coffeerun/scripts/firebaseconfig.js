// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


(function (window) {
    'use strict';
    var App = window.App || {};
    
    window.FirebaseConfig = {
        apiKey: "AIzaSyBGS5gMa3FOc3zhQVkTWbHyI-t7nRdnWFU",
        authDomain: "coffeerun-c5414.firebaseapp.com",
        projectId: "coffeerun-c5414",
        storageBucket: "coffeerun-c5414.appspot.com",
        messagingSenderId: "315257071560",
        appId: "1:315257071560:web:757d454c63aaf4be2e02fd",
        measurementId: "G-Z5C15K10H8"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig)
    window.App = App;
  
  })(window);