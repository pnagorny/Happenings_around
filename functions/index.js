const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
admin.initializeApp();

const Firestore = admin.firestore;
// eslint-disable-next-line new-cap
const db = Firestore();

const axios = require("axios");
const cors = require("cors")({origin: true});

const googleMapsApiKey = "AIzaSyC42wAPlAJjDFuOdDX12hmhWvlojFOC0B4";

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.geocodeAddressAndSave = onRequest(async (request, response) => {
  try {
    const {address,
      eventName,
      eventDateTime,
      eventDescription} = request.body;
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`);

    if (data.status !== "OK") {
      return cors(request, response, () => {
        response.status(200).send("No Results");
      });
    }

    const geocodedLocation = data.results[0];

    const objGeocodedLocation = {
      address: geocodedLocation.formatted_address,
      geoPoint: new admin.firestore.
          GeoPoint(geocodedLocation.geometry.location.lat,
              geocodedLocation.geometry.location.lng),
      eventName: eventName,
      eventDateTime: eventDateTime,
      eventDescription: eventDescription,
    };

    await db.collection("locations").add(objGeocodedLocation);
    return cors(request, response, () => {
      response.status(200).send(objGeocodedLocation);
    });
  } catch (error) {
    logger.error("An error occurred:", error.message);
    return cors(request, response, () => {
      response.status(500).send("Internal Server Error: " + error.message);
    });
  }
});
