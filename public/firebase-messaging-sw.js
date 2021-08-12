// import firebase from "firebase/app";
// import "firebase/messaging";
// const firebase = require("firebase/app");
// require("firebase/messaging");
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAEZFqaXVWNhDG-QEICKPc93YvKcLLhoqo",
  authDomain: "react-firebase-noti.firebaseapp.com",
  projectId: "react-firebase-noti",
  storageBucket: "react-firebase-noti.appspot.com",
  messagingSenderId: "1074678787493",
  appId: "1:1074678787493:web:681d0fdfa48a0737570c4c",
  measurementId: "G-6DLZ6GV5WV",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
