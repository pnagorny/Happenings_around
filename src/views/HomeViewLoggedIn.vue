<template>
  <div class="topBar">
    <div class="topButtons">
      <button @click="$router.push('about')">About</button>
      <SignInParent/>
      <button class="logout" @click="Logout">Logout</button>
    </div>
  </div>
  <div>
    Teraz jestes zalogowany eluwka
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
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat/app';
import SignInParent from '../components/SignInParent.vue'
import {useRouter} from 'vue-router';
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';

export default {
  components: {
    SignInParent, GoogleMap, EventList,
  },
  setup () {
    const user = firebase.auth().currentUser;

    const name = ref("");
    const route = useRouter();

    onBeforeMount(() =>{
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then((data) => {
          window.alert("Logged out!")
          route.push('/')
        })
        .catch(err => alert(err.message));
    }

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

