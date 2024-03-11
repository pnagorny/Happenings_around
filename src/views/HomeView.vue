<template>
  <div class="topBar">
    <div class="topButtons">
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

<style>
.topBar {
  background-color: cadetblue;
  height: 3rem;
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.topButtons {
  display: flex;
  gap: 0.2rem;
}
.content {
  display: flex;
}
.eventList, .googleMap {
  flex: 1; /* This will make them take equal space */
  padding: 10px;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>


