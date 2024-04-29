<template>
  <HeaderLoggedIn />

  <input
    type="checkbox"
    id="tw-modal"
    class="peer fixed appearance-none opacity-0"
    ref="modalCheckbox"
  />
  <label
    @click.prevent=""
    class="pointer-events-none z-20 invisible fixed inset-0 lg:flex items-center justify-center overflow-hidden overscroll-contain bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked: [&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
  >
    <label
      @click.stop="closeModal"
      href=""
      class="absolute cursor-pointer top-5 right-5 mt-2 mr-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        />
      </svg>
    </label>
    <div
      class="h-11/12 lg:w-2/5 lg:h-4/5 rounded-2xl m-10 scale-90 overflow-y-auto overscroll-contain bg-slate-200 text-black shadow-2xl transition"
    >
      <div class="h-full rounded-2xl overflow-hidden bg-slate-100">
        <img
          class="lg:h-96 md:h-36 sm:h-80 h-20 w-full object-cover object-center"
          :src="
            selectedEventPop.eventPhotoURL ||
            'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'
          "
          alt="event image"
        />
        <div class="p-6">
          <h1 class="text-3xl font-bold text-black mb-3 line-clamp-2">
            {{ selectedEventPop.eventName }}
          </h1>
          <h2 class="text-slate-400 pt-2 font-semibold">
            {{ formatDate(selectedEventPop.eventDateTime) }}
          </h2>
          <h2 class="text-slate-400 pt-2 font-semibold mb-2">
            {{ selectedEventPop.address }}
          </h2>
          <p class="">{{ selectedEventPop.eventDescription }}</p>

          <div class="text-end">
            <span
              class="inline-flex items-center text-end leading-none text-sm py-1"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="black"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle></svg
              >{{ selectedEventPop.likesCount || 0 }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      @click.prevent=""
      class="m-10 scale-90 overflow-y-auto overscroll-contain rounded-md text-black transition"
    >
      <GoogleMap ref="googleMap" />
    </div>
  </label>

  <div class="lg:p-20 bg-gradient-to-b from-2_color to-1_color pt-36">
    <div v-if="user" class="-mb-8 pl-40">
      <h1 class="text-7xl text-white font-bold">
        {{ user.name }} {{ user.surname }}
      </h1>
    </div>
    <div class="flex p-10">
      <div v-if="user" class="w-full">
        <div
          class="rounded-2xl shadow-2xl p-6 bg-gradient-to-b from-1_color to-2_color"
        >
          <div class="text-center mb-6">
            <img
              :src="user.photoURL || 'https://via.placeholder.com/150'"
              alt="Profile Photo"
              class="mx-auto rounded-full h-52 w-52 object-cover shadow-2xl -mt-32"
            />
          </div>
          <div class="lg:flex">
            <div class="w-1/2 h-auto flex flex-col justify-center items-center">
              <div class="flex lg:-ml-96">
                <h1 class="text-8xl text-white font-bold -mb-10">Profil</h1>
              </div>
              <div
                class="bg-slate-200 rounded-2xl shadow-2xl h-auto w-3/4 mt-10 lg:-ml-28"
              >
                <div class="px-4 py-5 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Dane użytkownika
                  </h3>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Możesz je zmienić w każdej chwili.
                  </p>
                </div>
                <div class="flex items-center pb-5 px-5">
                  <img
                    class="rounded-full h-12 w-12"
                    :src="user.photoURL || 'https://via.placeholder.com/150'"
                    alt="Profile Photo"
                  />
                  <div class="ml-2 flex flex-col">
                    <div class="leading-snug text-lg text-gray-900 font-bold">
                      {{ user.name }} {{ user.surname }}
                    </div>
                    <div class="leading-snug text-sm text-gray-600">
                      {{ user.email }}
                    </div>
                  </div>
                </div>
                <div
                  v-for="(value, key) in userDetails"
                  :key="key"
                  class="border-t border-gray-300 px-4 py-5 sm:p-0"
                >
                  <dl class="sm:divide-y sm:divide-gray-700">
                    <div
                      class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                    >
                      <dt class="text-xl font-sans font-bold text-gray-700">
                        {{ key }}
                      </dt>
                      <dd
                        class="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2 flex"
                      >
                        {{ value }}
                        <svg
                          @click="openEditModal(key, value)"
                          class="w-[20px] h-[20px] ml-10 text-gray-500 cursor-pointer"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div class="p-4">
  <button
    @click="showDeleteAccountModal = true"
    class="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl shadow-lg"
  >
    Usuń konto
  </button>
</div>
<div v-if="showDeleteAccountModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-lg z-50">
  <div class="bg-white p-5 rounded-lg shadow-lg">
    <h3 class="text-lg font-bold mb-4">Confirm Account Deletion</h3>
    <input type="password" v-model="deletePassword" placeholder="Enter your password" class="border p-2 w-full mb-4">
    <div class="flex justify-end space-x-2">
      <button @click="showDeleteAccountModal = false" class="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded">Cancel</button>
      <button @click="deleteAccount" class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">Delete Account</button>
    </div>
  </div>
</div>
              </div>
            </div>
            <div
              class="w-1/2 h-auto flex flex-col justify-center items-center text-end"
            >
              <div class="flex">
                <h1 v-if="upcomingEvent" class="text-8xl text-white w-full font-bold -mb-4">
                  Już wkrótce
                </h1>
                <h1 v-else class="text-5xl text-white w-full font-bold -mb-4">
                  Weź udział w wydarzeniu aby zobaczyć zbiżający się event
                </h1>
              </div>
              <div v-if="upcomingEvent" class="w-3/4 text-start">
                <div class="rounded-lg bg-transparent">
                  <div
                    class="mt-4 bg-slate-200 rounded-2xl shadow-2xl cursor-pointer"
                    @click="
                      openModal(upcomingEvent);
                      handleZoomToEvent(upcomingEvent);
                    "
                  >
                    <img
                      :src="
                        upcomingEvent.eventPhotoURL ||
                        'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'
                      "
                      class="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <div class="p-4 h-auto">
                      <h3 class="text-2xl font-bold text-black line-clamp-2">
                        {{ upcomingEvent.eventName }}
                      </h3>
                      <p class="text-slate-500 pt-2 font-semibold">
                        {{ formatDate(upcomingEvent.eventDateTime) }}
                      </p>
                      <p class="text-slate-500 pt-2 font-semibold">
                        {{ upcomingEvent.address }}
                      </p>
                      <p :class="contentClass(upcomingEvent.id)">
                        {{ upcomingEvent.eventDescription }}
                      </p>
                      <p class="text-black text-xl font-bold">
                        Startuje za: {{ countdown }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 flex mt-28 mb-2">
            <h1 v-if="likedEvents.length > 0" class="px-4 text-8xl text-white font-bold ml-5">
              Polubione wydarzenia
            </h1>
            <h1 v-else class="px-4 text-5xl text-white font-bold ml-5">
              Polub wydarzenia aby zobaczyć je w tym miejscu
            </h1>
          </div>
          <div
            class="relative flex items-center px-10 mb-20"
            v-if="likedEvents.length > 0"
          >
            <button
              v-if="likedEvents.length > 5"
              @click="scrollLeft"
              class="absolute left-0 z-10 inset-y-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full"
            >
              <svg
                class="text-gray-800 h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div
              ref="scrollContainer"
              class="flex overflow-x-auto space-x-4 w-full px-4 scrollbar-hide"
            >
              <div
                v-for="event in likedEvents"
                :key="event.id"
                @click="
                  openModal(event);
                  handleZoomToEvent(event);
                "
                class="min-w-[280px] w-[280px] bg-slate-200 rounded-2xl relative cursor-pointer flex flex-col justify-between"
              >
                <img
                  :src="
                    event.eventPhotoURL ||
                    'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg'
                  "
                  class="w-full h-40 flex-grow object-cover rounded-t-2xl"
                />
                <div class="p-4">
                  <h3 class="text-lg font-bold text-black line-clamp-5">
                    {{ event.eventName }}
                  </h3>
                  <p class="text-gray-500">
                    {{ formatDate(event.eventDateTime) }}
                  </p>
                  <p class="text-sm text-gray-500">{{ event.address }}</p>
                </div>
                <button
                  @click="removeEvent($event, event.id)"
                  class="absolute bottom-2 right-2 bg-red-500 text-white p-1 rounded-full text-lg leading-none flex items-center justify-center w-8 h-8"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              v-if="likedEvents.length > 5"
              @click="scrollRight"
              class="absolute right-0 z-10 inset-y-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full"
            >
              <svg
                class="text-gray-800 h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Modal -->
    <div
      v-if="editModalOpen"
      @click.self="editModalOpen = false"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center backdrop-filter backdrop-blur-lg transition-all duration-200 ease-in-out z-10"
    >
      <div class="bg-white p-5 rounded-lg">
        <h3 class="text-lg font-bold">Edytuj {{ currentEditField }}</h3>
        <input type="text" v-model="editValue" class="border p-2 w-full" />
        <div class="mt-4 flex justify-end space-x-2">
          <button
            @click="editModalOpen = false"
            class="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
          >
            Anuluj
          </button>
          <button
            @click="saveChanges"
            class="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
          >
            Zapisz
          </button>
        </div>
      </div>
    </div>
  </div>

  <FooterLoggedIn />
</template>

<script>
import HeaderLoggedIn from "../components/HeaderLoggedIn.vue";
import FooterLoggedIn from "@/components/FooterLoggedIn.vue";
import GoogleMap from "../components/GoogleMap.vue";
import { getAuth, onAuthStateChanged, updateEmail, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";
import { onMounted, ref, computed, watch, onUnmounted, nextTick } from "vue";
import { db } from "../main.js";
import { useRouter } from 'vue-router';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  documentId,
  updateDoc,
  arrayRemove,
  deleteDoc
} from "firebase/firestore";

export default {
  components: { HeaderLoggedIn, FooterLoggedIn, GoogleMap },
  methods: {
    handleZoomToEvent(event) {
      console.log(this.$refs);
      if (this.$refs.googleMap) {
        this.$refs.googleMap.zoomToLocation(event.geoPoint);
      } else {
        console.error("GoogleMap component is not properly referenced.");
      }
    },
  },

  setup() {
    const user = ref(null);
    const editModalOpen = ref(false);
    const likedEvents = ref([]);
    const editValue = ref("");
    const upcomingEvent = ref(null);
    const countdown = ref("");
    const intervalId = ref(null);
    const currentEditField = ref("");
    const scrollContainer = ref(null);
    const modalCheckbox = ref(null);
    const selectedEventPop = ref({});
    const selectedEventPopsec = ref({});
    const auth = getAuth();
    const eventModalOpen = ref(false);
    const selectedEvent = ref(null);
    const showDeleteAccountModal = ref(false);
    const deletePassword = ref("");
    const router = useRouter();

    const deleteAccount = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const credential = EmailAuthProvider.credential(user.email, deletePassword.value);

    try {
      // Reauthenticate user
      await reauthenticateWithCredential(user, credential);
      
      // Deleting the user's profile picture from Firebase Storage
      if (user.photoURL) {
        const storage = getStorage();
        const photoRef = storageRef(storage, user.photoURL);
        await deleteObject(photoRef).catch((error) => {
          console.error("Failed to delete profile picture:", error);
        });
      }

      // Proceed with deleting the user's Firestore data
      await deleteDoc(doc(db, "users", user.uid));
      
      // Delete the user's authentication record
      await user.delete();
      console.log("Account deleted successfully.");
      // Reset modal states
      showDeleteAccountModal.value = false;
      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  }
};

    onMounted(async () => {
      const authUser = auth.currentUser;
      if (authUser) {
        const userDocRef = doc(db, "users", authUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          user.value = userDoc.data();
          if (user.value.likedEvents && user.value.likedEvents.length > 0) {
            const eventsQuery = query(
              collection(db, "locations"),
              where(documentId(), "in", user.value.likedEvents)
            );
            const querySnapshot = await getDocs(eventsQuery);
            likedEvents.value = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            updateUpcomingEvent();
          }
        }
      }
      intervalId.value = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId.value);
    });

    const updateUpcomingEvent = () => {
  const now = new Date();
  let closestEvent = null;
  let closestTime = Infinity;
  for (const event of likedEvents.value) {
    const eventDate = event.eventDateTime.toDate(); // Make sure the conversion is correct
    const timeDiff = eventDate - now;
    console.log(`Event: ${event.eventName}, Time Diff: ${timeDiff}`);

    if (timeDiff > 0 && timeDiff < closestTime) {
      closestEvent = event;
      closestTime = timeDiff;
    }
  }
  upcomingEvent.value = closestEvent;
  console.log("Closest Event: ", upcomingEvent.value);
  updateCountdown();
};
    const contentClass = (id) => {
      return [
        "leading-relaxed line-clamp-5 py-2 text-sm font-light mb-3 transition-max-height ",
        upcomingEvent[id] ? "max-h-[1000px]" : "max-h-72",
      ].join(" ");
    };

    const updateCountdown = () => {
  if (!upcomingEvent.value) {
    countdown.value = "No upcoming events";
    return;
  }
  const now = new Date();
  // Zakładamy, że `eventDateTime` jest Firestore Timestamp
  const eventDate = upcomingEvent.value.eventDateTime.toDate();
  const timeDiff = eventDate - now;

  if (timeDiff > 0) {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdown.value = "Event has started";
  }
};


    const formatDate = (firestoreTimestamp) => {
  if (!firestoreTimestamp) return '';

  // Convert Firestore Timestamp to JavaScript Date object
  let date;
  if (firestoreTimestamp.toDate) {
    date = firestoreTimestamp.toDate();
  } else if (firestoreTimestamp instanceof Date) {
    date = firestoreTimestamp;
  } else {
    return 'Invalid date';
  }

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
};

    const scrollLeft = () => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -280, behavior: "smooth" });
      }
    };

    const scrollRight = () => {
      if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 280, behavior: "smooth" });
      }
    };

    const removeEvent = async (event, eventId) => {
      event.stopPropagation();
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, {
        likedEvents: arrayRemove(eventId),
      });
      likedEvents.value = likedEvents.value.filter(
        (event) => event.id !== eventId
      );
    };

    const userDetails = computed(() => {
      if (user.value) {
        return {
          Pseudonim: user.value.nickname,
          Imię: user.value.name,
          Nazwisko: user.value.surname,
          Email: user.value.email,
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
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userDocRef, updateData);
      user.value[currentEditField.value] = editValue.value;
      editModalOpen.value = false;
    };
    const openEventModal = (event) => {
      selectedEventPop.value = event;
      eventModalOpen.value = true;
      nextTick(() => {
        initializeMap(event.location);
      });
    };

    const initializeMap = (location) => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 8,
      });

      new google.maps.Marker({
        position: location,
        map: map,
      });
    };
    const openModal = async (event) => {
      selectedEventPop.value = event;
      await nextTick();
      if (modalCheckbox.value) {
        modalCheckbox.value.checked = true;
      }
    };

    const closeModal = async () => {
      await nextTick();
      if (modalCheckbox.value) {
        modalCheckbox.value.checked = false;
      }
    };

    return {
      user,
      likedEvents,
      formatDate,
      scrollLeft,
      scrollRight,
      scrollContainer,
      removeEvent,
      contentClass,
      openEditModal,
      saveChanges,
      userDetails,
      editValue,
      editModalOpen,
      upcomingEvent,
      countdown,
      eventModalOpen,
      selectedEvent,
      openEventModal,
      openModal,
      closeModal,
      selectedEventPop,
      modalCheckbox,
      showDeleteAccountModal,
      deletePassword,
      deleteAccount
    };
  },
};
</script>
