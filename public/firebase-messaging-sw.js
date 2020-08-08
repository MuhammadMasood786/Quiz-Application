importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDiVLrrDZwBDVk1lOhtMFKwUVNt2kMu0ZU",
    authDomain: "cloudmessage-35543.firebaseapp.com",
    databaseURL: "https://cloudmessage-35543.firebaseio.com",
    projectId: "cloudmessage-35543",
    storageBucket: "cloudmessage-35543.appspot.com",
    messagingSenderId: "271528004120",
    appId: "1:271528004120:web:132ac68796ea62ef43916d"
});

const messaging = firebase.messaging();

