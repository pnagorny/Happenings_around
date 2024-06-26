<template>
  <div class="max-w-2xl">
    <div
      class="p-4 md:mx-0 mx-4 my-10 md:my-0 bg-white rounded-lg border shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-4">
        <h3
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Nadchodzące wydarzenia
        </h3>
        <router-link
          to="/events"
          @click="navigateToFullEvent"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Zobacz wszystkie
        </router-link>
      </div>
      <div class="flow-root">
        <ul
          role="list"
          v-for="event in limitedEvents"
          :key="event.id"
          class="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li
            class="py-4 sm:py-5 rounded hover:bg-gray-600"
            @click="zoomToEvent(event)"
          >
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p
                  class="lg:text-xl text-sm font-bold text-gray-900 truncate dark:text-white"
                >
                  {{ event.eventName }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ event.eventDescription }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ event.address }}
                </p>
              </div>
              <div
                class="w-24 lg:w-auto inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ event.eventDateTime }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main.js";

export default {
  name: "EventList",
  data() {
    return {
      events: [],
      unsubscribe: null, // Store the unsubscribe function for the listener
    };
  },
  computed: {
    limitedEvents() {
      return this.events.slice(0, 6);
    },
  },
  created() {
  this.unsubscribe = db.collection("locations")
    .orderBy("eventDateTime", "asc")
    .onSnapshot(
      (snapshot) => {
        this.events = snapshot.docs.map((doc) => {
          const data = doc.data();
          // Ensure the eventDateTime is a Firestore Timestamp and convert it
          if (data.eventDateTime && data.eventDateTime.toDate) {
            data.rawDate = data.eventDateTime.toDate();
          } else if (data.eventDateTime) { // Handle cases where eventDateTime might be a string
            data.rawDate = new Date(data.eventDateTime);
          }
          
          // Format date for display
          data.eventDateTime = this.formatDate(data.rawDate);
          return { id: doc.id, ...data };
        });

        // Ensure sorting happens after the conversion
        this.events.sort((a, b) => a.rawDate - b.rawDate);
      },
      (error) => {
        console.error("Error fetching events:", error);
      }
    );
},
  beforeUnmount() {
    // Unsubscribe from the listener when the component is destroyed
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date
        .getHours()
        .toString()
        .padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}.${(
        date.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${date.getFullYear()}r.`;
      return formattedDate;
    },
    zoomToEvent(event) {
      this.$emit("zoomToEvent", event.geoPoint);
    },
    navigateToFullEvent() {
      this.$router.push({ name: "events" }).then(() => {
        this.$nextTick(() => {
          const eventSection = document.getElementById("event-list-main");
          if (eventSection) {
            eventSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    },
  },
};
</script>
