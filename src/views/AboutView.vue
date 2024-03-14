<template>
  <body>
    <header class="bg-2_color py-8  shadow-2xl">
  <div class="container mx-auto flex justify-between items-center">
    <!-- Logo and Happenings Around -->
    <div class="flex justify-start items-center space-x-8">
      <!-- Logo -->
      <!-- Happenings Around -->
      <a href="#" class="text-white text-2xl font-mono font-bold ">placeholder</a>
    </div>

    <!-- Navigation and Sign Up to the right -->
    <div class="flex justify-end items-center space-x-8">
      <!-- Navigation -->
      <nav class="hidden md:flex space-x-8">
        <button @click="$router.push('/')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Home</button>
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Events</a>
        <button @click="$router.push('about')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">About us</button>
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Profile</a>


      </nav>

      <!-- Sign Up button -->
      <SignInParent/>
      
    </div>
  </div>
</header>
<section id='mission-items' class="w-full pt-20 bg-gradient-to-b from-2_color to-1_color">
    <div class="container mx-auto flex justify-center items-center py-5">
        <p class="text-black text-2xl font-mono font-bold ">Nasza misja</p>

    </div>
    <div class="container mx-auto flex justify-center items-center">
        <p class="text-black text-xl font-mono font-bold py-1">opis opis opisopis opis opisopis opis opisopis opis opisopis opis opisopis opis opis</p>
    </div>
</section>
<section class="w-full py-5">
  <div class="container mx-auto flex justify-between flex-wrap">

    <div class="w-1/5 p-4 text-center">
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

    <div class="w-1/5 p-4 text-center">
      <div class="bg-gradient-to-r from-3_color from-30% to-1_color  h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center">
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

    <div class="w-1/5 p-4 text-center">
      <div class="bg-gradient-to-r from-1_color from-10% via-3_color  to-1_color  h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center">
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

    <div class="w-1/5 p-4 text-center">
      <div class="bg-gradient-to-r from-1_color  to-3_color  h-96 p-6 rounded-lg shadow-2xl flex flex-col justify-around items-center">
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

    <div class="w-1/5 p-4 text-center">
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
    
  </div>
</section>
<section class="w-full pt-48 bg-gradient-to-b from-1_color to-2_color">
  <div class="container mx-auto text-center">
    <h2 class="text-black text-2xl font-mono font-bold py-5">Autorzy</h2>
  </div>
  <div class=" container mx-auto flex justify-center items-center">
<p class="text-gray-700 text-xl font-mono font-bold py-1">opis opis opisopis opis opisopis opis opisopis opis opisopis opis opisopis opis opis</p>
</div>
</section>

<section class="w-full py-5 bg-2_color">
  <div class="container mx-auto flex justify-around items-center flex-wrap">
    <!-- Autor 1 -->
    <div class="w-1/2 md:w-1/4 p-4 flex flex-col items-center">

      <div class="w-64 h-64 mb-3 rounded-full overflow-hidden">
        <img src="../assets/images/photo1.jpg" alt="Imię i nazwisko autora 1" class="w-full h-full object-cover">
      </div>
      <h3 class="text-black text-xl font-bold">Piotrek ...</h3>
      <p class="text-black text-m mt-2">Krótki opis autora 1.</p>
    </div>
    <!-- Autor 2 -->
    <div class="w-1/2 md:w-1/4 p-4 flex flex-col items-center">

      <div class="w-64 h-64 mb-3 rounded-full overflow-hidden">
        <img src="../assets/images/photo2.jpg" alt="Imię i nazwisko autora 2" class="w-full h-full object-cover">
      </div>
      <h3 class="text-black text-xl font-bold">Patryk ...</h3>
      <p class="text-black text-m mt-2">Krótki opis autora 2.</p>
    </div>
  </div>
</section>
<section class="py-10 bg-gradient-to-b from-2_color to-1_color pt-48">
  <div class="container mx-auto text-center ">
    <h2 class="text-3xl font-bold mb-6">Następna sekcja</h2>
    <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-8">opsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opisopsi opsi opsi opis.</p>
  </div>
</section>
<section class=" justify-between items-center">
  <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div v-for="(item, index) in textItems" :key="index" class="text-container p-4 w-full md:w-1/2 lg:w-1/3">
          <div v-if="item.expanded" class="border-none rounded  border- shadow-sm p-4 bg-4_color">
            <p class="text-gray-700 text-base">{{ item.fullText }}</p>
            <button @click="toggleText(index)" class="mt-2 bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Read Less
            </button>
          </div>
          <div v-else class="border-none rounded shadow-2xl p-4 bg-4_color">
            <p class="text-white text-2xl font-bold text-center">Short Text </p>
            <p class="text-gray-700 text-center">pizda magika </p>
            <button @click="toggleText(index)" class="mt-2 bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Read More
            </button>
          </div>
        </div>
      </div>
    
  </div>
</section>
<section class="w-full bg-1_color h-24 bg-gradient-to-t from-2_color to-1_color h-96">
  <div class="container mx-auto text-center">

  </div>
</section>
<footer class=" bg-slate-50 dark:bg-black">
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
        Dostarczamy platformę na której użytkownicy mogą wyszukiwać interesujace ich wydarzenia w okolicy, tworzyć je lub brać w nich udział.
      </p>
    </div>
    <div class="w-full text-center text-slate-600 md:w-1/5 md:text-left">
      <div class="text-sm font-semibold">Home</div>
      <ul class="text-sm">
        <li class="pt-3">
          <a class="underline decoration-transparent underline-offset-4 transition hover:decoration-slate-700"
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
    ©
    
    2024
    
    Patryk i Piotr. All rights reserved.
  </div>
</footer>
</body>
</template>


<script>
import { ref, onMounted } from 'vue';
import SignInParent from '../components/SignInParent.vue';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';




import '../assets/tailwind.css'

export default {
  components: {
    SignInParent
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