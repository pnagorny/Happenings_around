<template>
<HeaderLoggedIn v-if="isLoggedIn" />
    <HeaderNotLoggedIn v-else />
<section id='mission-items' class="w-full h-96 pt-20 bg-gradient-to-b from-2_color to-1_color">
    <div class="container mx-auto flex justify-center items-center py-5">
      <p class="text-black text-2xl font-mono font-bold">Home view</p>
    </div>
    <div class="container mx-auto flex justify-center items-center">
           
    <p v-if="isLoggedIn">Jesteś zalogowany</p>
    <p v-else>Nie Jesteś zalogowany.</p>
    </div>
</section>
<section class="flex flex-col md:flex-row bg-gradient-to-b from-1_color to-2_color ">
  <div class="md:w-1/2  flex justify-center items-center ">
    <div class="container eventList md:ml-20">
      <EventList @zoomToEvent="handleZoomToEvent"/>
    </div>
</div>



  <div class="container md:w-1/2 mt-0 flex justify-center ">
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
      <ModalComponentParentLogged />
      <button
        @click="$router.push('about')"
        class="rounded-md border-0 bg-slate-100 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:bg-white hover:shadow-slate-200 dark:shadow-slate-600"
      >
        Learn more
      </button>
    </div>
  </section>
  <FooterLoggedIn v-if="isLoggedIn" />
    <FooterNotLoggedIn v-else />
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';
import ModalComponentParentLogged from '../components/ModalComponentParentForLoggedIn.vue';
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { ref, onMounted } from 'vue';
import HeaderNotLoggedIn from '@/components/HeaderNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';

export default {
  components: {
GoogleMap, EventList,  ModalComponentParentLogged, HeaderLoggedIn, HeaderNotLoggedIn, FooterLoggedIn, FooterNotLoggedIn
  },
  methods: {
    handleZoomToEvent(geoPoint) {
  if (this.$refs.googleMap && typeof this.$refs.googleMap.zoomToLocation === 'function') {
    this.$refs.googleMap.zoomToLocation(geoPoint);
  } else {
    console.error('GoogleMap component is not properly referenced.');
  }
},

  },
  setup () {
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