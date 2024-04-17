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
      <input type="file" @change="handleFileUpload" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
      <button type="submit" class="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">Wyślij</button>
    </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

  
  export default {
    name: "EventForm",
    data: () => ({
      formData: {
        street: "",
        eventName: "",
        eventDateTime: "",
        eventDescription: "",
        photoFile: null,
        
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
    handleFileUpload(event) {
      this.formData.photoFile = event.target.files[0];
    },
      async handleFormSubmit() {
        const storage = getStorage();
        const { street, eventName, eventDateTime, eventDescription, photoFile  } = this.formData;
        if (!this.formData.street) {
          alert("You must add a full address!");
          return;
        }
        try {
        
          
        const photoPath = `events/${this.formData.eventName}`;
        const fileRef = storageRef(storage, photoPath);
        await uploadBytes(fileRef ,photoFile);
        const eventPhotoURL = await getDownloadURL(fileRef);

        await axios.post("https://geocodeaddressandsave-ohpijyn6fq-uc.a.run.app", {
          address: street,
          eventName: eventName,
          eventDateTime: eventDateTime,
          eventDescription: eventDescription,
          eventPhotoURL: eventPhotoURL
        });

        this.$router.push('/home');

        this.formData = {
          street: "",
          eventName: "",
          eventDateTime: "",
          eventDescription: "",
          photoFile: null
        };

        console.log('event added')
        } catch (error) {
                console.error("Failed to add event:", error.message);
                alert("Adding event failed: " + error.message);
            }
      },
    },
  };
  </script>
  