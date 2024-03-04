<template>
    <div class="main">
        <form @submit.prevent="handleFormSubmit">
            <input type="text" v-model="formData.street" placeholder="street"><br>
            <input type="text" v-model="formData.city" placeholder="city"><br>
            <input type="text" v-model="formData.state" placeholder="voivodeship"><br>
            <input type="text" v-model="formData.zip" placeholder="zip"><br>
            <button type="submit" variant="primary">Submit</button>
        </form>
    </div>
    <div class="map">
        <GMapMap
      :center="center"
      :zoom="10"
      :map-type-id="terrain"
      style="width: 1000px; height: 700px"
  >
    <div v-if="markers.length > 0">
        <GMapCluster>
        <GMapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="{lat: m.geoPoint.latitude, lng: m.geoPoint.longitude}"
        />
        </GMapCluster>
    </div>
  </GMapMap>
    </div>
</template>

<script>
import axios from "axios";
import { db } from "../main.js";
export default {
  name: "GoogleMap",
  data: () => ({
    markers: [],
    formData: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    center: {lat: 54.370799, lng: 18.6127864}
  }),
  async beforeMount() {
    const snap = await db.collection("locations").get();

    snap.docs.forEach((doc) => {
      this.markers.push(doc.data());
    });
  },
  methods: {
    async handleFormSubmit() {
      if (
        !this.formData.street ||
        !this.formData.city ||
        !this.formData.state ||
        !this.formData.zip
      ) {
        alert("You must add a full address!");
        return;
      }
      let address = `${this.formData.street}, ${this.formData.city}, ${this.formData.state} ${this.formData.zip}`;
      let { data } = await axios.post(
        "https://geocodeaddressandsave-ohpijyn6fq-uc.a.run.app",
        {
          address: address,
        }
      );

      if (data === "No Results") {
        alert("No results for address");
        return;
      }
      let obj = {
        address: data.address,
        geoPoint: {
          latitude: data.geoPoint._latitude,
          longitude: data.geoPoint._longitude,
        },
      };
      this.markers.push(obj);
      
      this.formData.street = "";
      this.formData.city = "";
      this.formData.state = "";
      this.formData.zip = "";
    },
  },
};
</script>

<style>

</style>