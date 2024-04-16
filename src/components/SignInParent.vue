<template>
  <div>
    <button class="text-white font-mono text-xl select-none bg-1_color font-medium py-2 px-4 rounded transition-transform duration-300 transform hover:scale-110" @click="showAuthModal">
      Zaloguj się
    </button>
    <AuthModal ref="authModal" />
  </div>

</template>

<script>
import AuthModal from './SignInModal.vue';

export default {
  components: {
    AuthModal
  },
  methods: {
    showAuthModal() {
      this.$refs.authModal.showModal = true;
    }
  }
};
</script>
