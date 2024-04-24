<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
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
          Dostarczamy platformę na której użytkownicy mogą
          wyszukiwać interesujace ich wydarzenia w okolicy, tworzyć je lub brać
          w nich udział.
        </p>
      </div>
      <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
        <ul class="text-sm">
          <li class="pt-3">
            <router-link
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              to="/"
              @click.native="navigateToHomeSection"
            >
              Strona Główna
            </router-link>
          </li>
          <li class="pt-3">
            <router-link
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              to="/events"
              @click.native="navigateToEventSection"
            >
              Wydarzenia
            </router-link>
          </li>
        </ul>
      </div>
      <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
        <ul class="text-sm">
          <li class="pt-3">
            <router-link
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              to="/about"
              @click.native="navigateToAboutSection"
            >
              O Nas
            </router-link>
          </li>
          <li class="pt-3">
            <router-link
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              to="/about"
              @click.native="navigateToFaqSection"
            >
              FAQ
            </router-link>
          </li>
          <li class="pt-3">
            <router-link
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
              to="/about"
              @click.native="navigateToContactSection"
            >
              Skontaktuj się z nami
            </router-link>
          </li>
        </ul>
      </div>
      <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
        <ul class="text-sm">
          <li class="pt-3">
            <button
              @click="showAuthModal"
              class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
            >
              Dołącz do nas
            </button>
            <AuthModal ref="authModal" />
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
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthModal from "../components/SignInModal.vue";
import "../assets/tailwind.css";

export default {
  components: {
    AuthModal,
  },
  methods: {
    showAuthModal() {
      this.$refs.authModal.showModal = true;
    },
    navigateToEventSection() {
      this.$router.push({ name: "events" }).then(() => {
        this.$nextTick(() => {
          const eventSection = document.getElementById("event-list-main");
          if (eventSection) {
            eventSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    },
    navigateToHomeSection() {
      this.$router.push({ name: "home" }).then(() => {
        this.$nextTick(() => {
          const homeSection = document.getElementById("home");
          if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    },
    navigateToAboutSection() {
      this.$router.push({ name: "about" }).then(() => {
        this.$nextTick(() => {
          const aboutSection = document.getElementById("aboutus");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    },
    navigateToFaqSection() {
      this.$router.push({ name: "about" }).then(() => {
        this.$nextTick(() => {
          const aboutSection = document.getElementById("aboutus-faq");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    },
    navigateToContactSection() {
      this.$router.push({ name: "about" }).then(() => {
        this.$nextTick(() => {
          const aboutSection = document.getElementById("aboutus-contact-form");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
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
      });
    });
    return {
      name,
      isLoggedIn,
    };
  },
};
</script>
