importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBH7IBcB2DVRqkNNmER9y84BWkmyR0b3HU",
  authDomain: "github-push-demo.firebaseapp.com",
  projectId: "github-push-demo",
  messagingSenderId: "598003719674",
  appId: "1:598003719674:web:8335b3304f6e62ee9e1843"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
