<template>
  <div class="topBar">
    <div class="topButtons">
      <button @click="$router.push('about')">About</button>
      <SignInParent/>
    </div>
  </div>
  <div class="eventList">

  </div>
  <div class="googleMap">
    <GoogleMap/>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from 'vue';
import SignInParent from '../components/SignInParent.vue';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import GoogleMap from '../components/GoogleMap.vue';

export default {
  components: {
    SignInParent, GoogleMap
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
.topBar{
  background-color: cadetblue;
  height: 3rem;
  width: 100%;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
.topButtons{
  display: flex;
  gap: 0.2rem;
}
body{
  padding: 0px;
  margin: 0px;
}
}
</style>

