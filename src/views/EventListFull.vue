<template>
  <HeaderLoggedIn v-if="isLoggedIn" />
      <HeaderNotLoggedIn v-else />

<input type="checkbox" id="tw-modal" class="peer fixed appearance-none opacity-0" ref="modalCheckbox"/>

<label @click.prevent="" class="pointer-events-none z-10 invisible fixed inset-0 lg:flex  items-center justify-center overflow-hidden
overscroll-contain bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible 
peer-checked:opacity-100 peer-checked: [&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
>
<label @click.stop="closeModal" href="" class=" absolute cursor-pointer  top-5 right-5 mt-2 mr-3">
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
</svg>
</label>
  <div class="h-11/12 lg:w-2/5 lg:h-4/5 rounded-2xl m-10 scale-90 overflow-y-auto overscroll-contain  bg-white  text-black shadow-2xl transition" >
    <a href="" class="hover:text-red absolute  top-5 right-5 mt-2 mr-3">
      <svg class="w-10 h-10 text-slate-100 hover:text-red-500 duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
        </a>
        <div class="h-full rounded-2xl overflow-hidden bg-slate-100">
        <img class="lg:h-96 md:h-36 sm:h-80 h-20 w-full  object-cover object-center" :src="selectedEvent.eventPhotoURL || 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'" alt="event image">
        <div class='p-6'>
          <h1 class="text-3xl font-bold text-black mb-3 line-clamp-2">{{ selectedEvent.eventName }}</h1>
          <h2 class="text-slate-400 pt-2 font-semibold ">{{ selectedEvent.eventDateTime }}</h2>
          <h2 class="text-slate-400 pt-2 font-semibold mb-2">{{ selectedEvent.address }}</h2>
          <p class="">{{ selectedEvent.eventDescription }}</p>

          
      <div class="text-end">
      <span class=" mr-3 inline-flex items-center text-end lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
      <svg class="w-4 h-4 mr-1" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
      </svg>1.2K
    </span>
    <span class=" inline-flex items-center leading-none text-sm">
      <svg class="w-4 h-4 mr-1" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
      </svg>6
    </span>
  </div>
        </div>
      </div>
  </div>

  
  <div @click.prevent="" class="m-10 scale-90 overflow-y-auto overscroll-contain rounded-md   text-black  transition" >

    <GoogleMap   ref="googleMap" />
  </div>

</label>

<section id='event-list-main' class="w-full h-28 md:h-60 pt-20 bg-gradient-to-b from-2_color to-1_color">
  <div class="container mx-auto flex justify-center items-center py-5">
    <form class="mx-auto w-3/4 py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
  <input type="text" placeholder="Szukaj wydarzenia" class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" v-model="filter">
  <button @click.prevent="applyFilter" class="flex flex-row items-center  justify-center  min-w-130px] px-4 rounded-full  border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-1_color text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3" >
      Szukaj
  </button>
</form>
  </div>
</section>
<section class= "font-sans">
  <label >
<div class="container px-5 py-24 mx-auto ">
  <div class="flex flex-wrap -m-4">
  
    <div  class="p-4 md:w-1/3 sm:w-full rounded-2xl hover:-translate-y-2 duration-300 relative" v-for="event in events" :key="event.id"  @click="openModal(event);handleZoomToEvent(event)" >
      <button @click.stop="toggleLikeEvent(event)" class="absolute top-5 right-5 mt-2 mr-3 focus:outline-none">
    <svg :class="{ 'text-red-500': isEventLiked(event.id), 'text-slate-100': !isEventLiked(event.id) }" class="w-10 h-10 hover:text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  </button>

      <div class="h-full rounded-2xl overflow-hidden bg-slate-100 hover:shadow-2xl   ">
        <img class="lg:h-80 md:h-36 sm:h-80 h-80 w-full  object-cover object-center" :src="event.eventPhotoURL || 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'" alt="event image">
        <div class='p-6'>
          <h1 class="text-2xl font-bold text-black mb-3 line-clamp-2">{{ event.eventName }}</h1>
          <h2 class="text-slate-400 pt-2 font-semibold ">{{ event.eventDateTime }}</h2>
          <h2 class="text-slate-400 pt-2 font-semibold">{{ event.address }}</h2>
          <p :class="contentClass(event.id)">{{ event.eventDescription }}</p>
            <div class=" w-1/2">
              <label @click="openModal(event);"><div class="group text-black hover:text-sky-600 transition underline decoration-solid ease-in-out duration-200">Czytaj więcej<span aria-hidden="true" class="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">→</span></div></label>
            </div>
          
      <div class="text-end">
      <span class=" mr-3 inline-flex items-center text-end lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
      <svg class="w-4 h-4 mr-1" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
      </svg>1.2K
    </span>
    <span class=" inline-flex items-center leading-none text-sm">
      <svg class="w-4 h-4 mr-1" stroke="black" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
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
</label>  

</section>
  <FooterLoggedIn v-if="isLoggedIn" />
  <FooterNotLoggedIn v-else />

  </template>
  
  <script>
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import HeaderNotLoggedIn from '@/components/HeaderNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';
import GoogleMap from '../components/GoogleMap.vue';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { ref, onMounted, reactive, watch, computed, nextTick } from 'vue';
import { db } from "../main.js";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export default {
  components: {
    HeaderLoggedIn, HeaderNotLoggedIn, FooterNotLoggedIn, FooterLoggedIn ,GoogleMap
  },
  methods: {
    handleZoomToEvent(event) {
   console.log(this.$refs); // Check what refs are available
  if (this.$refs.googleMap) {
    this.$refs.googleMap.zoomToLocation(event.geoPoint);
  } else {
    console.error('GoogleMap component is not properly referenced.');
  }
},
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
    const selectedEvent = ref({});
    const modalCheckbox = ref(null);
    const auth = getAuth();
    const user = ref(null);
  

   
    
    
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
      onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        isLoggedIn.value = true;
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists()) {
          user.value = { uid: authUser.uid, ...userDoc.data() };
        } else {
          console.log("No such document!");
        }
      } else {
        isLoggedIn.value = false;
        user.value = null;
      }
    });
      unsubscribe = db.collection("locations").onSnapshot(snapshot => {
        events.value = snapshot.docs.map(doc => {
          const data = doc.data();
          data.eventDateTime = formatDate(data.eventDateTime);
          return { id: doc.id, ...data };
        });
        applyFilter();  
      }, error => {
        console.error("Error fetching events:", error);
      });
    });

    const toggleLikeEvent = async (event) => {
      if (!user.value) return;
      const userDocRef = doc(db, 'users', user.value.uid);
      if (isEventLiked(event.id)) {
        await updateDoc(userDocRef, {
          likedEvents: arrayRemove(event.id)
        });
        user.value.likedEvents = user.value.likedEvents.filter(id => id !== event.id);
      } else {
        await updateDoc(userDocRef, {
          likedEvents: arrayUnion(event.id)
        });
        user.value.likedEvents.push(event.id);
      }
    };

    const isEventLiked = (eventId) => {
      return user.value?.likedEvents.includes(eventId);
    };


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
        'leading-relaxed line-clamp-4 py-2 text-sm font-light mb-3 transition-max-height duration-500 ease-out overflow-hidden',
        expandedEvents[id] ? 'max-h-[1000px]' : 'max-h-72'
      ].join(' ');
    };

    const openModal = async (event) => {
      selectedEvent.value = event;
      await nextTick(); // Użyj nextTick aby poczekać na aktualizacje DOM
      if (modalCheckbox.value) {
        modalCheckbox.value.checked = true; // Otwórz modal
      }
    };
    const closeModal = async () => {
      await nextTick(); // Użyj nextTick aby poczekać na aktualizacje DOM
      if (modalCheckbox.value) {
        modalCheckbox.value.checked = false; // Zamknij modal
      }
    };
    
    const handleLikeEvent = async (domEvent, eventData) => {
  domEvent.preventDefault(); // Prevent default link behavior

  if (!auth.currentUser) {
    alert("You must be logged in to like events.");
    return;
  }

  const userDocRef = doc(db, 'users', auth.currentUser.uid);
  try {
    // Add the event ID to the 'likedEvents' array in the user document
    await updateDoc(userDocRef, {
      likedEvents: arrayUnion(eventData.id)
    });
  } catch (error) {
    console.error("Error liking event:", error);

  }
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
      buttonText,
      contentClass,
      expandedEvents,
      openModal,
      closeModal,
      selectedEvent,
      modalCheckbox,
      handleLikeEvent,
      toggleLikeEvent, 
      isEventLiked,
      
      

      
    };
    
  }
}
</script>



  