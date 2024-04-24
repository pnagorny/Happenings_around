<template>
  <body>
    <HeaderLoggedIn v-if="isLoggedIn"/>
      <HeaderNotLoggedIn v-else />
    <section class="" id="aboutus">
      <div class="bg-gradient-to-b from-2_color to-1_color p-40 text-2xl shadow-2xl font-bold title-font text-slate-200 font-sans">
        <div class="py-8 flex justify-center items-center">
          <span class="text-violet-500 text-5xl">Happenings</span>
          <span class="text-white text-5xl">Around</span>
        </div>
        <h1 class="text-4xl p-4">Nasza platforma została stworzona z myślą o zbliżaniu ludzi oraz umożliwianiu im wspólnego spędzania czasu na organizowanych przez siebie wydarzeniach społecznych.</h1>
        <p class="font-medium p-4">Wierzymy, że prawdziwe relacje buduje się nie tylko w przestrzeni wirtualnej, ale przede wszystkim poprzez bezpośrednie spotkania, dzielenie się pasjami i doświadczeniami.</p>
        <p class="font-bold p-4">Dołącz do nas, aby odkrywać wydarzenia w Twojej okolicy!</p>
        <p class="pt-10 flex justify-center items-center font-medium">
          <RegisterParent/>
        </p>
      </div>
    </section>
    <section id="carousel" class="relative overflow-hidden w-full flex justify-center items-center" style="height: 70rem"> <!-- Set a fixed height for the carousel -->
    <div v-for="(item, index) in photoSliderItems" :key="index"
         class="absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out"
         :class="{ 'opacity-100': index === activePhotoIndex, 'opacity-0': index !== activePhotoIndex }">
        <img :src="item.url" class="w-full object-cover" alt="Photo Slide">
        <div class="absolute top-0 left-0 w-full bg-1_color bg-opacity-0 py-2 text-center text-white text-2xl text-shadow-md">
            {{ item.caption }}
        </div>
    </div>
    <button @click="prevPhoto" class="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 cursor-pointer bg-opacity-30 text-gray-800 text-3xl rounded-full z-10">
        ❮
    </button>
    <button @click="nextPhoto" class="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 cursor-pointer bg-opacity-30 text-gray-800 text-3xl rounded-full z-10">
        ❯
    </button>
</section>
<section id="aboutus-info" class="text-white py-8">
  <div class="flex items-center justify-center text-6xl font-bold py-8">Jak zacząć?</div>
  <div class="flex items-center justify-center space-x-10"> <!-- Adjust spacing as necessary -->
    <div class="flex items-center flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
      </svg>
      <span class="mt-2 text-3xl font-bold">Utwórz konto</span>
      <span class="mt-1 text-sm">Utwórz konto aby móc dodawać i tworzyć wydarzenia!</span>
    </div>
    <div class="flex items-center flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      <span class="mt-2 text-3xl font-bold">Stwórz wydarzenie</span>
      <span class="mt-1 text-sm">Twórz wydarzenia, rozwijaj społeczności!</span>
    </div>
    <div class="flex items-center flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span class="mt-2 text-3xl font-bold">Odkrywaj wydarzenia</span>
      <span class="mt-1 text-sm">Odkrywaj wydarzenia dostępne w twojej okolicy!</span>
    </div>
  </div>
</section>
      <section id="aboutus-faq" class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16">
      <h6 class="text-4xl text-white font-medium text-center mb-2">
        FAQ
      </h6>
      <h2 class="text-6xl font-manrope text-center font-bold text-white leading-[3.25rem]">
        Często zadawane pytania
      </h2>
    </div>

    <div class="accordion-group bg-transparent rounded-2xl" data-accordion="default-accordion">
      <div v-for="faq in faqs" :key="faq.id" 
     class="accordion py-8 px-6 border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 bg-2_color"
     :class="{ 'accordion-active:bg-indigo-50': faq.isOpen }"
     style="margin-bottom: 20px;">
  <button class="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
          @click="toggleFaq(faq.id)"
          :aria-controls="'basic-collapse-' + faq.id"
          :class="{ 'accordion-active:text-indigo-600': faq.isOpen }">
    <h5>{{ faq.question }}</h5>
    <svg class="text-gray-500 transition duration-500 group-hover:text-indigo-600"
         :class="{ 'accordion-active:rotate-180': faq.isOpen }"
         width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  </button>
  <div :id="'basic-collapse-' + faq.id" class="accordion-content w-full px-0 overflow-hidden"
       :style="{ maxHeight: faq.isOpen ? '250px' : '0px' }"
       aria-labelledby="'basic-heading-' + faq.id">
    <p class="text-base text-gray-900 leading-6">{{ faq.answer }}</p>
  </div>
</div>
    </div>
  </div>
    </section>
    <section id="aboutus-contact-form" class="bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-white">Skontaktuj się z nami</h2>
      <p class="mb-8 lg:mb-16 font-bold text-center text-gray-400 sm:text-xl">Jeżeli masz do nas pytanie, skontaktuj się z nami za pomocą formularza.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-300">Twoj e-mail</label>
              <input type="email" id="email" class="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="przykladowy@email.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Temat</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Daj nam znać w jaki sposób możemy ci pomóc" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-400">Twoja wiadomość</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Treść wiadomości"></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 hover:text-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-800 transition duration-300">Wyślij</button>
      </form>
  </div>

    </section>
    
    <FooterLoggedIn v-if="isLoggedIn" />
    <FooterNotLoggedIn v-else />
  </body>
</template>

<script>
import { ref, onMounted, reactive, onUnmounted, nextTick, watch, computed } from "vue";
import RegisterParent from "../components/RegisterParent.vue";
import ModalComponentParentLogged from "../components/ModalComponentParentForLoggedIn.vue";
import HeaderLoggedIn from "../components/HeaderLoggedIn.vue";
import HeaderNotLoggedIn from "../components/HeaderNotLoggedIn.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import FooterNotLoggedIn from "@/components/FooterNotLoggedIn.vue";
import FooterLoggedIn from "@/components/FooterLoggedIn";
import { storage } from '../main.js';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import "../assets/tailwind.css";

export default {
  components: {
    HeaderLoggedIn,
    HeaderNotLoggedIn,
    FooterLoggedIn,
    FooterNotLoggedIn,
    RegisterParent,
  },
  setup() {
    const isLoggedIn = ref(false);
    const activePhotoIndex = ref(0);
    const photoSliderItems = reactive([]);
    const intervalId = ref(null);
    const auth = getAuth();
    const faqs = reactive([
      { 
        id: 1,
        question: "Jak utworzyć wydarzenie na stronie?",
        answer: "Aby utworzyć wydarzenie, należy być zalogowanym użytkownikiem, a następnie nacisnąć przycisk 'Dodaj wydarzenie' znajdujący się u góry strony obok zakładki 'Profil'. Po wypełnieniu odpowiednich pól, zatwierdź formularz naciskając przycisk 'Wyślij', i gotowe! Twoje wydarzenie jest dostępne!",
        isOpen: false },
      { 
        id: 2, 
        question: "Czy istnieje limit uczestników wydarzenia?",
        answer: "Wszystko zależne jest od typu wydarzenia. Jeśli jest to wydarzenie publiczne, limit wskazywany jest przez ilość biletów, które udostępnia organizator. W przypadku wydarzeń prywatnych, nie ma obowiązującego limitu uczestników.",
        isOpen: false 
      },
      { 
        id: 3,
        question: "Czy mogę zakończyć wydarzenie? Jeśli tak, to co sie stanie?",
        answer: "Wydarzenia kończą się automatycznie, gdy się rozpoczynają.",
        isOpen: false 
      },
      { 
        id: 4,
        question: "Jak znaleźć eventy, które mogą mnie zainteresować?",
        answer: "Po wejściu w zakładkę 'Wydarzenia' u góry strony, możesz filtrować wydarzenia za pomocą ich nazwy czy też adresu.",
        isOpen: false 
      },
      {
        id: 5,
        question: "Czy za dołączenie do eventu jest jakaś opłata?",
        answer: "Nie, za dołączenie do eventu nie jest pobierana opłata. Jeżeli jest to wydarzenie publiczne, organizator określa opłatę za uczestnictwo w wydarzeniu.",
        isOpen: false 
      },
      {
        id: 6,
        question: "Co zrobić gdy mam problem z utworzeniem wydarzenia lub dołączeniem do niego?",
        answer: "W takim wypadku prosimy o kontakt z obsługą użytkownika, poprzez formularz kontaktowy umieszczony na dole strony 'O nas'",
        isOpen: false 
      },
      {
        id: 7,
        question: "Gdzie mogę sprawdzić polubione wydarzenia?",
        answer: "Polubione wydarzenia znajdują się w zakładce 'Profil', poniżej Twojego panelu użytkownika.",
        isOpen: false
      },
      {
        id: 8,
        question: "Jak zaktualizować informację o moim profilu?",
        answer: "Aby zaktualizować informację o Twoim profilu, wejdź w zakładkę 'Profil', a następnie zmień interesujące cię pola za pomocą ikony znajdującej się obok pola z informacjami.",
        isOpen: false 
      },
      {
        id: 9,
        question: "Jak mogę usunąc swoje konto?",
        answer: "Aby usunąć konto użytkownika, wejdź na swój profil poprzez zakładkę 'Profil', a następnie kliknij w przycisk 'Usuń konto' znajdujący się poniżej Twojego panelu użytkownika.",
        isOpen: false
      },
      {
        id: 10,
        question: "W jaki sposób mogę skontaktować się z obsługą użytkownika?",
        answer: "Aby skontaktować się z obsługą użytkownika, skorzystaj z formularza kontaktowego, znajdującego sie na samym dole strony 'O nas'. Wypełnij go odpowiednimi danymi i zatwierdź przyciskiem 'Wyślij'. Skontaktujemy się z Tobą najszybciej jak to się da!",
        isOpen: false
      },
    ]);

    

    onMounted(() => {
  loadImages().then((images) => {
    images.forEach(image => photoSliderItems.push(image));
    console.log("Loaded images:", photoSliderItems);
    intervalId.value = setInterval(() => {
      activePhotoIndex.value = (activePhotoIndex.value + 1) % photoSliderItems.length;
      console.log('Changed slide to index:', activePhotoIndex.value);
    }, 3000);
  }).catch(error => {
    console.error("Error during image loading initialization:", error);
  });

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
    console.log('Authentication status checked:', isLoggedIn.value);
  });
});

    function loadImages() {
  const basePath = 'sliderPhotos/';
  const imageDetails = [
    { filename: '1-slide.jpg', caption: 'Odkryj najnowsze eventy w Twojej okolicy!' },
    { filename: '2-slide.jpg', caption: 'Dołącz do zabawy na wydarzeniach społecznych!' },
    { filename: '3-slide.jpg', caption: 'Odkrywaj wydarzenia zgodne z Twoimi pasjami!' }
  ];

  const promises = imageDetails.map((detail) => {
    const imageRef = storageRef(storage, `${basePath}${detail.filename}`);
    return getDownloadURL(imageRef)
      .then((url) => {
        return { url, caption: detail.caption }; // Return an object with url and caption
      })
      .catch((error) => {
        console.error(`Failed to load image ${detail.filename}:`, error);
        return null; // Return null if there's an error
      });
  });

  return Promise.all(promises).then((images) => {
    return images.filter(image => image !== null); // Filter out null values
  });
}

onUnmounted(() => {
  clearInterval(intervalId.value);
});

    function toggleFaq(id) {
      const faq = faqs.find(f => f.id === id);
      if (faq) {
        faq.isOpen = !faq.isOpen;
      }
    }

    const changePhoto = (direction) => {
      const nextIndex = direction === 'next'
        ? (activePhotoIndex.value + 1) % photoSliderItems.length
        : (activePhotoIndex.value - 1 + photoSliderItems.length) % photoSliderItems.length;

      // Start fade-out
      photoSliderItems[activePhotoIndex.value].fading = true;

      // After fade-out, change the photo
      setTimeout(() => {
        activePhotoIndex.value = nextIndex;
        // Reset fading after the image has changed
        photoSliderItems.forEach(item => item.fading = false);
      }, 700); // This duration should match the CSS transition-duration
    };

    const nextPhoto = () => {
      activePhotoIndex.value = (activePhotoIndex.value + 1) % photoSliderItems.length;
    };

function prevPhoto() {
    activePhotoIndex.value = (activePhotoIndex.value - 1 + photoSliderItems.length) % photoSliderItems.length;
}

    return {
      isLoggedIn,
      faqs,
      toggleFaq,
      photoSliderItems,
      activePhotoIndex,
      nextPhoto,
      prevPhoto,
      changePhoto
    };
  },
};
</script>
<style scoped>
.text-shadow-md {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.8);
}
</style>
