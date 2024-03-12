<template>
  <h1>Hejka</h1>
  <div>
    <div>
      <button @click="$router.push('about')">About</button>
      <SignInParent/>
    </div>
  </div>
  <div class="content">
    <div class="eventList">
      <EventList/>
    </div>
    <div class="googleMap">
      <GoogleMap/>
    </div>
    
</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SignInParent from '../components/SignInParent.vue';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';
import '../assets/tailwind.css'

export default {
  components: {
    SignInParent, GoogleMap, EventList,
  },
  setup () {
    const name = ref("");
    const isLoggedIn = ref(false);


    let auth;
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        }
        else {
          isLoggedIn.value = false;
        }
      })
    });

    const Logout = () => {
      signOut(auth)
    };


    return {
      name,
      Logout
    }
  }
}

</script>




