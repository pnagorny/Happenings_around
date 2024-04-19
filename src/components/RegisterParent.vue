<template>
  <div>
    <button
      class="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400 dark:shadow-violet-900"
      @click="showAuthModal"
    >
      Zarejestruj się
    </button>
    <AuthModal ref="authModal" />
  </div>
</template>

<script>
import AuthModal from "./RegisterModal.vue";

export default {
  components: {
    AuthModal,
  },
  methods: {
    showAuthModal() {
      this.$refs.authModal.showModal = true;
    },
  },
};
</script>
