maptilersdk.config.apiKey = mapToken;

maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', 
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates, 
    zoom: 9,
});

map.on("load", () => {
    new maptilersdk.Marker({color : "red"})
      .setLngLat(listing.geometry.coordinates)
      .setPopup(new maptilersdk.Popup({offset : 25}).setHTML(`<h3>${listing.title}</h3><p>Exact location will be provided after booking!</p>`))
      .addTo(map)
});