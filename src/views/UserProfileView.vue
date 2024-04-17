<template>
  <HeaderLoggedIn/>
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
  <div   class="h-11/12 lg:w-2/5 lg:h-4/5 rounded-2xl m-10 scale-90 overflow-y-auto overscroll-contain  bg-white  text-black shadow-2xl transition" >
    <a href="" class="hover:text-red absolute  top-5 right-5 mt-2 mr-3">
      <svg class="w-10 h-10 text-slate-100 hover:text-red-500 duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
        </a>
        <div class="h-full rounded-2xl overflow-hidden bg-slate-100">
        <img class="lg:h-96 md:h-36 sm:h-80 h-20 w-full  object-cover object-center" :src="selectedEventPop.photoURL || 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'" alt="event image">
        <div class='p-6'>
          <h1 class="text-3xl font-bold text-black mb-3 line-clamp-2">{{ selectedEventPop.eventName }}</h1>
          <h2 class="text-slate-400 pt-2 font-semibold ">{{ formatDate(selectedEventPop.eventDateTime) }}</h2>
          <h2 class="text-slate-400 pt-2 font-semibold mb-2">{{ selectedEventPop.address }}</h2>
          <p class="">{{ selectedEventPop.eventDescription }}</p>

          
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
  <div class="p-10 bg-gradient-to-b from-2_color to-1_color">
  <div class="flex p-10">
    <!-- Profile View -->
    <div v-if="user" class="flex-1 max-w-sm">
      <div class="rounded-lg shadow-lg p-6 bg-violet-500">
        <div class="justify-center items-center flex text-white p-4 text-lg">
          <h1>Profil</h1>
        </div>
        <div class="text-center mb-6">
          <img :src="user.photoURL || 'https://via.placeholder.com/150'" alt="Profile Photo" class="mx-auto rounded-full h-32 w-32 object-cover shadow-2xl">
          <h1 class="text-xl font-semibold text-white mt-4">{{ user.nickname }}</h1>
        </div>
        <div class="space-y-4">
          <div v-for="(value, key) in userDetails" :key="key" class="flex items-center justify-between">
            <div>
              <h2 class="text-white font-medium capitalize">{{ key }}:</h2>
              <p class="text-white">{{ value }}</p>
            </div>
            <button class="text-sm text-blue-300 hover:text-blue-500" @click="openEditModal(key, value)">Zmień</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Event on the Right -->
    <div v-if="upcomingEvent" class="flex-1 mx-52">
      <div class="rounded-lg p-6 bg-transparent h-80">
        <h2 class="text-xl font-medium text-white">Zbliżający się</h2>
        <div class="mt-4 bg-white rounded-2xl shadow-lg cursor-pointer" @click="openModal">
          <img :src="upcomingEvent.imageURL || 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'" class="w-full h-64 object-cover rounded-t-2xl">
          <div class="p-4 h-40">
            <h3 class="text-xl font-medium">{{ upcomingEvent.eventName }}</h3>
            <p class="text-gray-500">{{ formatDate(upcomingEvent.eventDateTime) }}</p>
            <p class="text-sm text-gray-500">{{ upcomingEvent.address }}</p>
            <p class="text-gray-700">{{ upcomingEvent.description }}</p>
            <p class="text-red-500">Start za: {{ countdown }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- Edit Modal -->
    <div v-if="editModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-5 rounded-lg">
        <h3 class="text-lg font-bold">Edytuj {{ currentEditField }}</h3>
        <input type="text" v-model="editValue" class="border p-2 w-full">
        <div class="mt-4 flex justify-end space-x-2">
          <button @click="editModalOpen = false" class="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded">Anuluj</button>
          <button @click="saveChanges" class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">Zapisz</button>
        </div>
      </div>
    </div>
    <div class="items-center p-4 justify-center flex">
      <h1 class="p-4 text-xl text-white font-medium">Polubione wydarzenia</h1>
    </div>

    <!-- Liked Events View with Conditional Arrow Controls -->
    <div class="relative flex items-center" v-if="likedEvents.length > 0">
      <button v-if="likedEvents.length > 5" @click="scrollLeft" class="absolute left-0 z-10 inset-y-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full">
        <svg class="text-gray-800 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <div ref="scrollContainer" class="flex overflow-x-auto space-x-4 w-full px-4 scrollbar-hide">
        <div v-for="event in likedEvents" :key="event.id" @click="openModal(event); handleZoomToEvent(event)" class="min-w-[280px] w-[280px] bg-white rounded-2xl shadow-lg relative cursor-pointer">
          <img :src="event.photoURL || 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'" class="w-full h-40 object-cover rounded-t-2xl">
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ event.eventName }}</h3>
            <p class="text-gray-500">{{ formatDate(event.eventDateTime) }}</p>
            <p class="text-sm text-gray-500">{{ event.address }}</p>
            <p class="text-gray-700">{{ event.description }}</p>
          </div>
          <button @click="removeEvent($event, event.id)" class="absolute bottom-2 right-2 bg-red-500 text-white p-1 rounded-full text-lg leading-none flex items-center justify-center w-8 h-8">
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </div>
      </div>
      <button v-if="likedEvents.length > 5" @click="scrollRight" class="absolute right-0 z-10 inset-y-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full">
        <svg class="text-gray-800 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
  <FooterLoggedIn/>
</template>

<script>
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import GoogleMap from '../components/GoogleMap.vue';
import { getAuth, onAuthStateChanged, updateEmail } from 'firebase/auth';
import { onMounted, ref, computed, watch, onUnmounted, nextTick } from 'vue';
import { db } from '../main.js';
import { doc, getDoc, collection, query, where, getDocs, documentId, updateDoc, arrayRemove } from 'firebase/firestore';

export default {
  components: { HeaderLoggedIn, FooterLoggedIn, GoogleMap },
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
  setup() {
    const user = ref(null);
    const editModalOpen = ref(false);
    const likedEvents = ref([]);
    const editValue = ref('');
    const upcomingEvent = ref(null);
    const countdown = ref('');
    const intervalId = ref(null);
    const currentEditField = ref('');
    const scrollContainer = ref(null);
    const modalCheckbox = ref(null);
    const selectedEventPop = ref({});
    const auth = getAuth();
    const eventModalOpen = ref(false);
    const selectedEvent = ref(null);



    onMounted(async () => {
      const authUser = auth.currentUser;
      if (authUser) {
        const userDocRef = doc(db, 'users', authUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          user.value = userDoc.data();
          if (user.value.likedEvents && user.value.likedEvents.length > 0) {
            const eventsQuery = query(collection(db, 'locations'), where(documentId(), 'in', user.value.likedEvents));
            const querySnapshot = await getDocs(eventsQuery);
            likedEvents.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            updateUpcomingEvent();
          }
        }
      }
      intervalId.value = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId.value);  // Clear the interval when the component is unmounted
    });

    const updateUpcomingEvent = () => {
      const now = new Date();
      let closestEvent = null;
      let closestTime = Infinity;
      for (const event of likedEvents.value) {
        const eventDate = new Date(event.eventDateTime);
        const timeDiff = eventDate - now;
        if (timeDiff > 0 && timeDiff < closestTime) {
          closestEvent = event;
          closestTime = timeDiff;
        }
      }
      upcomingEvent.value = closestEvent;
      updateCountdown();
    };

    const updateCountdown = () => {
      if (!upcomingEvent.value) return;
      const now = new Date();
      const eventDate = new Date(upcomingEvent.value.eventDateTime);
      const timeDiff = eventDate - now;
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        countdown.value = 'Event has started';
      }
    };

    const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
};

    const scrollLeft = () => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -280, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 280, behavior: 'smooth' });
      }
    };

    const removeEvent = async (event, eventId) => {
  event.stopPropagation(); // Stop event propagation
  const userDocRef = doc(db, 'users', auth.currentUser.uid);
  await updateDoc(userDocRef, {
    likedEvents: arrayRemove(eventId)
  });
  likedEvents.value = likedEvents.value.filter(event => event.id !== eventId);
};

    const userDetails = computed(() => {
      if (user.value) {
        return {
          Nazwa: user.value.nickname,
          Imię: user.value.name,
          Nazwisko: user.value.surname,
          Email: user.value.email
        };
      }
      return {};
    });
    const openEditModal = (field, value) => {
      currentEditField.value = field;
      editValue.value = value;
      editModalOpen.value = true;
    };

    const saveChanges = async () => {
      const updateData = { [currentEditField.value]: editValue.value };
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, updateData);
      user.value[currentEditField.value] = editValue.value;
      editModalOpen.value = false;
    };
    const openEventModal = (event) => {
      selectedEventPop.value = event;
      eventModalOpen.value = true;
      nextTick(() => {
        initializeMap(event.location); // Assuming location is a latitude and longitude object
      });
    };
    const initializeMap = (location) => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
      });

      new google.maps.Marker({
        position: location,
        map: map
      });
    };
    const openModal = async (event) => {
      selectedEventPop.value = event;
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


    return { user, likedEvents, formatDate, scrollLeft, scrollRight, scrollContainer, removeEvent, openEditModal, saveChanges, userDetails, editValue, editModalOpen, upcomingEvent, countdown, eventModalOpen, selectedEvent, openEventModal, openModal, closeModal, selectedEventPop, modalCheckbox };
  }
}
</script>