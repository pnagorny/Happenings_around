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
  <footer class="bg-slate-50 dark:bg-black">
    <div
      class="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12"
    >
      <div
        class="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left"
      >
        <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
          <span class="text-violet-500">Happenings</span>
          <span class="dark:text-slate-400">Around</span>
        </div>
        <p class="text-sm text-slate-600">
          Dostarczamy platformę na której użytkownicy mogą wyszukiwać
          interesujace ich wydarzenia w okolicy, tworzyć je lub brać w nich
          udział.
        </p>
      </div>
      <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
        <div class="text-sm font-semibold">Home</div>
        <ul class="text-sm">
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Events
            </a>
          </li>
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              >Map
            </a>
          </li>
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Create event
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
        <div class="text-sm font-semibold">About us</div>
        <ul class="text-sm">
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Our mission
            </a>
          </li>
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Authors
            </a>
          </li>
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
      <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
        <div class="text-sm font-semibold text-slate-600">Join us</div>
        <ul class="text-sm">
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Register
            </a>
          </li>
          <li class="pt-3">
            <a
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Log in
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="container mx-auto border-t border-slate-200 p-8 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12"
    >
      © 2024 Patryk i Piotr. All rights reserved.
    </div>
  </footer>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';
import ModalComponentParentLogged from '../components/ModalComponentParentForLoggedIn.vue';
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { ref, onMounted } from 'vue';
import HeaderNotLoggedIn from '@/components/HeaderNotLoggedIn.vue';

export default {
  components: {
GoogleMap, EventList,  ModalComponentParentLogged, HeaderLoggedIn, HeaderNotLoggedIn
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