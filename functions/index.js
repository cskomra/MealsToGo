/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const functions = require("firebase-functions");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, client)
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, client)
});
