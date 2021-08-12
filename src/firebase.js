import firebase from "firebase/app";
import "firebase/messaging";

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

const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging
    .getToken({
      vapidKey:
        "BONMNDqKQUpeyydxhkddXF5NUCSuTCzS9H4vrzOUrHQUlK5UycMvYEeZmnJXf-uk_d6RyTJ7GEu24rSXauptHkI",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
