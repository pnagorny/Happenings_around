import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import VueGoogleMaps from 'vue-google-maps-community-fork';
import './assets/tailwind.css';
import { onAuthStateChanged } from 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyD4U6OwKlQ5dQJt23jd8yg3S13nQyf566M",
  authDomain: "happeningsarround.firebaseapp.com",
  projectId: "happeningsarround",
  storageBucket: "happeningsarround.appspot.com",
  messagingSenderId: "323855487253",
  appId: "1:323855487253:web:2d7e79848df5b389b1591c",
  measurementId: "G-6WN2QG091G"
};

firebase.initializeApp(firebaseConfig);
const Firestore = firebase.firestore;
export const db = Firestore(); // eslint-disable-line

let app;

firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(VueGoogleMaps, {
        load: {
          key: 'YOUR_GOOGLE_MAPS_API_KEY',
        }
      })
      .mount('#app');
  }

  if (user) {
    // User is logged in, you can store the user details in your app's state
    console.log('User is logged in:', user);
  } else {
    // No user is logged in, handle accordingly
    console.log('No user is logged in');
  }
});