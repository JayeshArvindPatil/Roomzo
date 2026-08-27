const maptilerClient = require("@maptiler/client");

maptilerClient.config.fetch = fetch;

maptilerClient.config.apiKey = process.env.MAP_TOKEN;

module.exports = {
  geocoding: maptilerClient.geocoding,
  tiles: maptilerClient.tiles,
  elevation: maptilerClient.elevation,
  geolocation: maptilerClient.geolocation
};
