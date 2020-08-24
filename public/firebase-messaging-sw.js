// import {importScripts,firebase} from 'firebase';

importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyDiVLrrDZwBDVk1lOhtMFKwUVNt2kMu0ZU",
    authDomain: "cloudmessage-35543.firebaseapp.com",
    databaseURL: "https://cloudmessage-35543.firebaseio.com",
    projectId: "cloudmessage-35543",
    storageBucket: "cloudmessage-35543.appspot.com",
    messagingSenderId: "271528004120",
    appId: "1:271528004120:web:b540757a12cb731543916d"
  };

firebase.initializeApp(firebaseConfig);
firebase.messaging()