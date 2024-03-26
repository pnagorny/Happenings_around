<template>
  <body>
    <section id="about-section">
    <HeaderLoggedIn v-if="isLoggedIn" />
    <HeaderNotLoggedIn v-else />
    </section>
<section id='mission-items' class="w-full pt-20 bg-gradient-to-b from-2_color to-1_color">
    <div class="container mx-auto flex justify-center items-center py-5">
        <p class="text-black text-2xl font-mono font-bold ">Nasza misja</p>

    </div>
    <div class="container mx-auto flex justify-center items-center">
        <p class="text-black text-xl font-mono font-bold py-1">opis opis opisopis opis opisopis opis opisopis opis opisopis opis opisopis opis opis</p>
    </div>
</section>
<section class="w-full py-5">
  <div class="container mx-auto md:flex justify-between flex-wrap">

    <div class="md:w-1/5 p-4 text-center">
      <div class="bg-3_color h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center">
        <!-- Tytuł misji -->
        <p class="text-black text-xl font-mono">Tytuł misji</p>
        <!-- Opis misji -->
        <p class="text-black text-sm font-mono">Opis misji</p>
        <!-- Miejsce na obrazek -->
        <div class="w-full h-40  flex justify-center items-center">
          <img src="ścieżka_do_obrazka" alt="Obrazek misji" class="max-h-full max-w-full">
        </div>
      </div>
    </div>

        <div class="md:w-1/5 p-4 text-center">
          <div
            class="bg-3_color h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center"
          >
            <!-- Tytuł misji -->
            <p class="text-black text-xl font-mono">Tytuł misji</p>
            <!-- Opis misji -->
            <p class="text-black text-sm font-mono">Opis misji</p>
            <!-- Miejsce na obrazek -->
            <div class="w-full h-40 flex justify-center items-center">
              <img
                src="ścieżka_do_obrazka"
                alt="Obrazek misji"
                class="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>

        <div class="md:w-1/5 p-4 text-center">
          <div
            class="bg-3_color h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center"
          >
            <!-- Tytuł misji -->
            <p class="text-black text-xl font-mono">Tytuł misji</p>
            <!-- Opis misji -->
            <p class="text-black text-sm font-mono">Opis misji</p>
            <!-- Miejsce na obrazek -->
            <div class="w-full h-40 flex justify-center items-center">
              <img
                src="ścieżka_do_obrazka"
                alt="Obrazek misji"
                class="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>

        <div class="md:w-1/5 p-4 text-center">
          <div
            class="bg-3_color h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center"
          >
            <!-- Tytuł misji -->
            <p class="text-black text-xl font-mono">Tytuł misji</p>
            <!-- Opis misji -->
            <p class="text-black text-sm font-mono">Opis misji</p>
            <!-- Miejsce na obrazek -->
            <div class="w-full h-40 flex justify-center items-center">
              <img
                src="ścieżka_do_obrazka"
                alt="Obrazek misji"
                class="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>

        <div class="md:w-1/5 p-4 text-center">
          <div
            class="bg-3_color h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center"
          >
            <!-- Tytuł misji -->
            <p class="text-black text-xl font-mono">Tytuł misji</p>
            <!-- Opis misji -->
            <p class="text-black text-sm font-mono">Opis misji</p>
            <!-- Miejsce na obrazek -->
            <div class="w-full h-40 flex justify-center items-center">
              <img
                src="ścieżka_do_obrazka"
                alt="Obrazek misji"
                class="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full pt-48 bg-gradient-to-b from-1_color to-2_color" id="authors-section-id">
      <div class="container mx-auto text-center">
        <h2 class="text-black text-2xl font-mono font-bold py-5">Autorzy</h2>
      </div>
      <div class="container mx-auto flex justify-center items-center">
        <p class="text-gray-700 text-xl font-mono font-bold py-1">
          opis opis opisopis opis opisopis opis opisopis opis opisopis opis
          opisopis opis opis
        </p>
      </div>
    </section>

    <section class="w-full py-5 bg-2_color">
      <div class="container mx-auto flex justify-around items-center flex-wrap">
        <!-- Autor 1 -->
        <div class="w-1/2 md:w-1/4 p-4 flex flex-col items-center">
          <div class="md:w-64 md:h-64 mb-3 rounded-full overflow-hidden">
            <img
              src="../assets/images/photo1.jpg"
              alt="Imię i nazwisko autora 1"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-black text-xl font-bold">Piotrek ...</h3>
          <p class="text-black text-m mt-2">Krótki opis autora 1.</p>
        </div>
        <!-- Autor 2 -->
        <div class="w-1/2 md:w-1/4 p-4 flex flex-col items-center">
          <div class="md:w-64 md:h-64 mb-3 rounded-full overflow-hidden">
            <img
              src="../assets/images/photo2.jpg"
              alt="Imię i nazwisko autora 2"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="text-black text-xl font-bold">Patryk ...</h3>
          <p class="text-black text-m mt-2">Krótki opis autora 2.</p>
        </div>
      </div>
    </section>
    <section class="py-10 bg-gradient-to-b from-2_color to-1_color pt-48">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Następna sekcja</h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          opsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opisopsi opsi
          opsi opisopsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opis.
        </p>
      </div>
    </section>
    <section class="justify-between items-center">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div
            v-for="(item, index) in textItems"
            :key="index"
            class="text-container p-4 w-full md:w-1/2 lg:w-1/3"
          >
            <div
              v-if="item.expanded"
              class="border-none rounded border- shadow-sm p-4 bg-4_color"
            >
              <p class="text-gray-700 text-base">{{ item.fullText }}</p>
              <button
                @click="toggleText(index)"
                class="mt-2 bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Read Less
              </button>
            </div>
            <div v-else class="border-none rounded shadow-2xl p-4 bg-4_color">
              <p class="text-white text-2xl font-bold text-center">
                Short Text
              </p>
              <p class="text-gray-700 text-center">pizda magika</p>
              <button
                @click="toggleText(index)"
                class="mt-2 bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="w-full bg-1_color h-24 bg-gradient-to-t from-2_color to-1_color h-96"
    >
      <div class="container mx-auto text-center"></div>
    </section>
    <FooterLoggedIn v-if="isLoggedIn" />
    <FooterNotLoggedIn v-else />
  </body>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import HeaderNotLoggedIn from '../components/HeaderNotLoggedIn.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn'
import '../assets/tailwind.css';

export default {
  components: {
    HeaderLoggedIn,
    HeaderNotLoggedIn,
    FooterLoggedIn,
    FooterNotLoggedIn,
  },
  setup () {
    const isLoggedIn = ref(false);

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
      });
    });

    return {
      isLoggedIn
    };
  }
}
</script>
