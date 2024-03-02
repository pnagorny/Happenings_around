import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD4U6OwKlQ5dQJt23jd8yg3S13nQyf566M",
  authDomain: "happeningsarround.firebaseapp.com",
  projectId: "happeningsarround",
  storageBucket: "happeningsarround.appspot.com",
  messagingSenderId: "323855487253",
  appId: "1:323855487253:web:2d7e79848df5b389b1591c",
  measurementId: "G-6WN2QG091G"
};

  firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
