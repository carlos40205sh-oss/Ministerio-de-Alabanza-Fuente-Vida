importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC1OvY10grOXME6_Kdb28LTyyITIxxcjm0",
  authDomain: "ministerio-de-alabanza-ac3f2.firebaseapp.com",
  projectId: "ministerio-de-alabanza-ac3f2",
  storageBucket: "ministerio-de-alabanza-ac3f2.firebasestorage.app",
  messagingSenderId: "314404534308",
  appId: "1:314404534308:web:cbb3543a559a71c7a780b1"
});

const messaging = firebase.messaging();
// Firebase handles background notifications automatically
