<template>
<div class="max-w-2xl mx-auto">
<div class="p-4  bg-white rounded-lg border shadow-2xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Events</h3>
      <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
      </a>
 </div>
 <div class="flow-root">
      <ul role="list" v-for="event in events" :key="event.id" class=" divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-4 sm:py-5 rounded hover:bg-gray-600">
              <div class="flex items-center space-x-4">
                  <div class="flex-1 min-w-0">
                      <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
                        {{ event.eventName }}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {{ event.eventDescription }}
                      </p>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {{ event.address }}
                      </p>
                  </div>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
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
    };
  },
  async created() {
    const snapshot = await db.collection("locations").get();
    this.events = snapshot.docs.map(doc => {
      const data = doc.data();
      data.eventDateTime = this.formatDate(data.eventDateTime);
      return { id: doc.id, ...data };
    });
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} ${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}r.`;
      return formattedDate;
    },
  },
};
</script>