<template>
    <div>
      <ul>
        <li v-for="event in events" :key="event.id" class="eventListStyle">
            <h1>{{ event.eventName }}<br></h1>
            {{ event.eventDateTime }}<br>
            {{ event.eventDescription }}<br>
            {{ event.address }}<br>
        </li>
      </ul>
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
  
  <style>
  .eventListStyle{
    border-color: pink;
    border-style: solid;
    border-width: 5px;
    width: 400px;
    padding: 20px;
    margin: 20px;
  }
  </style>
  