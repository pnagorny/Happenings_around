<template>
  <HeaderLoggedIn v-if="isLoggedIn" />
      <HeaderNotLoggedIn v-else />
<section id='event-list-main' class="w-full h-28 md:h-60 pt-20 bg-gradient-to-b from-2_color to-1_color">
  <div class="container mx-auto flex justify-center items-center py-5">
    <form class="mx-auto w-3/4 py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
  <input type="text" placeholder="Szukaj wydarzenia" class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" v-model="filter"><button @click.prevent="applyFilter" class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-1_color text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3" >
      Szukaj
  </button>
</form>
  </div>
</section>
<section class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
  <div class="flex flex-wrap -m-4">
    <div class="p-4 md:w-1/3" v-for="event in events" :key="event.id">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-2_color">
        <img class="lg:h-80 md:h-36 w-full object-cover object-center" :src="event.imageURL || 'https://dummyimage.com/720x600'" alt="event image">
        <div class='p-6'>
          <h2 class="text-l text-white mb-4 text-end">{{ event.eventDateTime }}</h2>
          <h1 class="text-2xl font-bold text-white mb-3 text-center">{{ event.eventName }}</h1>
          <h2 class="text-l text-bold text-white mb-3">{{ event.address }}</h2>
          <p :class="contentClass(event.id)">{{ event.eventDescription }}</p>
          <button @click="toggle(event.id)" class="text-white underline decoration-solid text-lg font-bold inline-flex items-center md:mb-2 lg:mb-0">
            {{ buttonText(event.id) }}
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
      </svg>
      </button>
      <div class="text-end">
      <span class="text-white mr-3 inline-flex items-center text-end lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
      <svg class="w-4 h-4 mr-1" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
      </svg>1.2K
    </span>
    <span class="text-white inline-flex items-center leading-none text-sm">
      <svg class="w-4 h-4 mr-1" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
      </svg>6
    </span>
  </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-8 flex justify-between items-center">
  <button @click="prevPage" :disabled="currentPage === 1" class="bg-2_color text-white font-bold py-2 px-4 rounded opacity-75 hover:opacity-75 disabled:opacity-50">Poprzednia</button>
  <span class="text-white">Strona {{ currentPage }} z {{ totalPages }}</span>
  <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-2_color text-white font-bold py-2 px-4 rounded opacity-75 hover:opacity-75 disabled:opacity-50">Następna</button>
</div>
</div>


</section>
  <FooterLoggedIn v-if="isLoggedIn" />
  <FooterNotLoggedIn v-else />

  </template>
  
  <script>
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import HeaderNotLoggedIn from '@/components/HeaderNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { ref, onMounted, reactive, watch, computed } from 'vue';
import { db } from "../main.js";

export default {
  components: {
    HeaderLoggedIn, HeaderNotLoggedIn, FooterNotLoggedIn, FooterLoggedIn
  },
  name: "EventList",
  setup() {
    const events = ref([]);
    const filter = ref("");
    const filteredEvents = ref([]);
    const expandedEvents = reactive({});
    const isLoggedIn = ref(false);
    const currentPage = ref(1);
    const pageSize = 9;
    
    
    let unsubscribe = null;

    const applyFilter = () => {
      if (filter.value.trim()) {
        filteredEvents.value = events.value.filter(event =>
          event.eventName.toLowerCase().includes(filter.value.toLowerCase().trim()) ||
          event.address.toLowerCase().includes(filter.value.toLowerCase().trim())
        );
      } else {
        filteredEvents.value = events.value;  // Show all events if no filter is provided
      }
      currentPage.value = 1;  // Always reset to the first page when filter changes
    };

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, user => {
        isLoggedIn.value = !!user;
      });
      unsubscribe = db.collection("locations").onSnapshot(snapshot => {
        events.value = snapshot.docs.map(doc => {
          const data = doc.data();
          data.eventDateTime = formatDate(data.eventDateTime);
          return { id: doc.id, ...data };
        });
        applyFilter();  // Apply filter initially to handle pre-existing filter values or default load
      }, error => {
        console.error("Error fetching events:", error);
      });
    });

    watch(filter, applyFilter);

    

    const totalPages = computed(() => {
      return Math.ceil(filteredEvents.value.length / pageSize);
    });

    const visibleEvents = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      return filteredEvents.value.slice(startIndex, startIndex + pageSize);
    });

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`;
    };

    const buttonText = (id) => {
      return expandedEvents[id] ? 'Czytaj mniej' : 'Czytaj więcej';
    };

    const contentClass = (id) => {
      return [
        'leading-relaxed text-lg text-black mb-3 transition-max-height duration-500 ease-out overflow-hidden',
        expandedEvents[id] ? 'max-h-[1000px]' : 'max-h-72'
      ];
    };

    const toggle = (id) => {
      expandedEvents[id] = !expandedEvents[id];
    };

    return {
      events: visibleEvents,
      isLoggedIn,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      applyFilter,
      filter,
      toggle,
      buttonText,
      contentClass
    };
  }
}
</script>



  