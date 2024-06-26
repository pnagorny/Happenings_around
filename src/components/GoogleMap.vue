<template>
  <div></div>
  <div
    ref="map"
    style="width: 45rem; height: 47rem"
    class="rounded-lg md:mx-0 mx-4 shadow-2xl"
  ></div>
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
      eventName: "",
      eventDateTime: "",
      eventDescription: "",
    },
    map: null,
    center: { lat: 54.370799, lng: 18.6127864 },
  }),
  async beforeMount() {
    const snap = await db.collection("locations").get();
    snap.docs.forEach((doc) => {
      const data = doc.data();
      if (data.geoPoint && data.geoPoint.latitude && data.geoPoint.longitude) {
        this.markers.push({
          ...data,
          _marker: null, // Initialize a property to store the Google Maps marker instance
        });
      } else {
        console.error("Invalid marker data:", data);
      }
    });
  },
  mounted() {
    this.loadGoogleMapsScript().then(() => {
      this.initMap();
    });
  },
  methods: {
    loadGoogleMapsScript() {
      return new Promise((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
        } else {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC42wAPlAJjDFuOdDX12hmhWvlojFOC0B4&libraries=places`;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
          script.onload = () => {
            resolve();
          };
          script.onerror = (error) => {
            reject(error);
          };
        }
      });
    },
    initMap() {
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: 12,
      });

      this.map.addListener("idle", () => {
        this.addMarkers();
      });
    },
    async handleFormSubmit() {
      if (!this.formData.street) {
        alert("You must add a full address!");
        return;
      }
      let address = `${this.formData.street}`;
      let eventName = `${this.formData.eventName}`;
      let eventDateTime = `${this.formData.eventDateTime}`;
      let eventDescription = `${this.formData.eventDescription}`;
      let { data } = await axios.post(
        "https://geocodeaddressandsave-ohpijyn6fq-uc.a.run.app",
        {
          address: address,
          eventName: eventName,
          eventDateTime: eventDateTime,
          eventDescription: eventDescription,
        }
      );

      if (data !== "No Results") {
        let obj = {
          address: data.address,
          geoPoint: {
            latitude: data.geoPoint._latitude || data.geoPoint.latitude,
            longitude: data.geoPoint._longitude || data.geoPoint.longitude,
          },
          eventName: this.formData.eventName,
          eventDateTime: this.formData.eventDateTime,
          eventDescription: this.formData.eventDescription,
          _marker: null,
        };
        this.markers.push(obj);
        this.addMarkers();
      }

      this.formData.street = "";
      this.formData.eventName = "";
      this.formData.evendDateTime = "";
      this.formData.eventDescription = "";
    },
    addMarkers() {
      this.markers.forEach((marker, index) => {
        if (!marker._marker) {
          const googleMarker = new google.maps.Marker({
            position: new google.maps.LatLng(
              marker.geoPoint.latitude,
              marker.geoPoint.longitude
            ),
            map: this.map,
          });
          this.markers[index]._marker = googleMarker;
        }
      });
      console.log("Markers added to the map:", this.markers);
    },
    zoomToLocation(geoPoint) {
      if (!this.map || !geoPoint) return;
      // eslint-disable-next-line no-undef
      const center = new google.maps.LatLng(
        geoPoint.latitude,
        geoPoint.longitude
      );
      this.map.setZoom(15);
      this.map.panTo(center);
    },
  },
  watch: {
    markers: {
      handler(newMarkers) {
        this.addMarkers();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
