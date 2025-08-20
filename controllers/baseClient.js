// baseClient.js
const maptilerClient = require("@maptiler/client");

// If Node < 18, polyfill fetch
// const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
maptilerClient.config.fetch = fetch;

// Configure with API key
maptilerClient.config.apiKey = process.env.MAP_TOKEN;

// Export ready-to-use services
module.exports = {
  geocoding: maptilerClient.geocoding,
  tiles: maptilerClient.tiles,
  elevation: maptilerClient.elevation,
  geolocation: maptilerClient.geolocation
};
