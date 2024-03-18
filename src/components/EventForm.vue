<template>
    <div class="">
      <div class="text-center text-2xl  pb-5">
            <h1>Dodaj wydarzenie</h1>
        </div>
        <form @submit.prevent="handleFormSubmit" class="space-y-4">
      <input type="text" v-model="formData.street" placeholder="Address" ref="autocomplete" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
      <input type="text" v-model="formData.eventName" placeholder="Event Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
      <input type="datetime-local" v-model="formData.eventDateTime" placeholder="Event Date and Time" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
      <textarea v-model="formData.eventDescription" placeholder="Event Description" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
      <button type="submit" class="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">Wyślij</button>
    </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "EventForm",
    data: () => ({
      formData: {
        street: "",
        eventName: "",
        eventDateTime: "",
        eventDescription: "",
      },
      autocomplete: null,
    }),
    mounted() {
    this.initAutocomplete();
  },
    methods: {
      initAutocomplete() {
      if (window.google && window.google.maps) {
        // eslint-disable-next-line no-undef
        this.autocomplete = new google.maps.places.Autocomplete(this.$refs.autocomplete, { types: ['geocode'] });
        this.autocomplete.addListener('place_changed', this.onPlaceChanged);
      }
    },
    onPlaceChanged() {
      const place = this.autocomplete.getPlace();
      if (place.geometry) {
        this.formData.street = place.formatted_address;
      } else {
        alert("No details available for input: '" + place.name + "'");
      }
    },
      async handleFormSubmit() {
        if (!this.formData.street) {
          alert("You must add a full address!");
          return;
        }
        const { street, eventName, eventDateTime, eventDescription } = this.formData;
        let { data } = await axios.post("https://geocodeaddressandsave-ohpijyn6fq-uc.a.run.app", {
          address: street,
          eventName: eventName,
          eventDateTime: eventDateTime,
          eventDescription: eventDescription,
        });
  
        if (data !== "No Results") {
          // Handle the successful submission case
          console.log("Submission successful", data);
          this.$emit('close-modal');
        }
        // Reset the form data
        this.formData = {
          street: "",
          eventName: "",
          eventDateTime: "",
          eventDescription: "",
        };
      },
    },
  };
  </script>
  