<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <body>
    <section id="home">
      <HeaderLoggedIn v-if="isLoggedIn" />
    <HeaderNotLoggedIn v-else />
    </section>
    
<section class="w-full pt-20 bg-gradient-to-b from-2_color to-1_color mb-24">
    <div class="container mx-auto flex justify-center items-center py-5">
        <p class="text-black text-2xl font-mono font-bold ">Home view</p>

    </div>
    <div class="container mx-auto flex justify-center items-center" id="map">
      
    <p v-if="user">Jesteś zalogowany jako {{ user.email }}</p>
    <p v-else>Nie jesteś zalogowany.</p>
  
    </div>
</section>

<section class="flex flex-col md:flex-row bg-gradient-to-b from-1_color to-2_color">
  <div class="md:w-1/2  flex justify-center items-center ">
    <div class="container eventList md:ml-20">
      <EventList @zoomToEvent="handleZoomToEvent"/>
    </div>
</div>

      <div class="container md:w-1/2 mt-0 flex justify-center">
        <GoogleMap ref="googleMap"/>
      </div>
    </section>

    <section
      class="w-full bg-gradient-to-b from-2_color to-1_color mx-auto px-8 py-36 text-center sm:px-12"
    >
      <h1
        class="mb-12 text-5xl font-extrabold leading-tight dark:text-slate-50 sm:text-6xl"
      >
        Chcesz dodać swoje wydarzenie?
      </h1>
      <p class="mb-12 leading-relaxed text-slate-700 dark:text-slate-50">
        UniqueFund provides access to fast and reliable financing solutions for
        SMEs. We have partnership with trusted loan providers with wide range of
        options.
      </p>
      <div
        class="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        <RegisterParent />
        
        <router-link
                class="rounded-md border-0 bg-slate-100 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:bg-white hover:shadow-slate-200 dark:shadow-slate-600"
                to="/about"
                @click.native="navigateToAboutSection"
              >
                Learn more
              </router-link>
      </div>
    </section>
    <FooterLoggedIn v-if="isLoggedIn" />
    <FooterNotLoggedIn v-else />
  </body>
</template>

<script>
import { ref, onMounted } from 'vue';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';
import RegisterParent from '../components/RegisterParent.vue';
import HeaderNotLoggedIn from '../components/HeaderNotLoggedIn.vue';
import HeaderLoggedIn from '@/components/HeaderLoggedIn.vue';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';

import "../assets/tailwind.css";

export default {
  components: {
GoogleMap, EventList, HeaderLoggedIn, HeaderNotLoggedIn, FooterLoggedIn, FooterNotLoggedIn, RegisterParent
  },
  methods: {
    handleZoomToEvent(geoPoint) {
   console.log(this.$refs); // Check what refs are available
  if (this.$refs.googleMap) {
    this.$refs.googleMap.zoomToLocation(geoPoint);
  } else {
    console.error('GoogleMap component is not properly referenced.');
  }
},
navigateToAboutSection() {
        this.$router.push({ name: 'about' }).then(() => {
          this.$nextTick(() => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      },

  },
  setup() {
    const name = ref("");
    const isLoggedIn = ref(false);

    let auth;
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
      })
    });
    return {
      name,
      isLoggedIn
    }
  }
}

</script>
