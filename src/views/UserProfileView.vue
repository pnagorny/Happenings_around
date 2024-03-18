<template>
<HeaderLoggedIn v-if="isLoggedIn" />
    <HeaderNotLoggedIn v-else />
    <section class="w-full h-96 pt-20 bg-gradient-to-b from-2_color to-1_color">
    <div class="container mx-auto flex justify-center items-center py-5">
        <p class="text-black text-2xl font-mono font-bold ">USER PROFILE PAGE</p>

    </div>
    <div class="container mx-auto flex justify-center items-center">
           
    <p v-if="isLoggedIn">Jesteś zalogowany</p>
    <p v-else>Nie jesteś zalogowany.</p>
    </div>
</section>
<section>

</section>
<FooterLoggedIn v-if="isLoggedIn" />
    <FooterNotLoggedIn v-else />
</template>

<script>

import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { ref, onMounted } from 'vue';
import HeaderNotLoggedIn from '@/components/HeaderNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';

export default {
  components: {
  HeaderLoggedIn, HeaderNotLoggedIn,FooterNotLoggedIn,FooterLoggedIn
  },
  methods: {
    handleZoomToEvent(geoPoint) {
      if (this.$refs.googleMap) {
        this.$refs.googleMap.zoomToLocation(geoPoint);
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