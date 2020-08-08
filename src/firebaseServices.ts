import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiVLrrDZwBDVk1lOhtMFKwUVNt2kMu0ZU",
  authDomain: "cloudmessage-35543.firebaseapp.com",
  databaseURL: "https://cloudmessage-35543.firebaseio.com",
  projectId: "cloudmessage-35543",
  storageBucket: "cloudmessage-35543.appspot.com",
  messagingSenderId: "271528004120",
  appId: "1:271528004120:web:132ac68796ea62ef43916d",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}


