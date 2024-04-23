// Initialize and add the map
let map;

async function initMap() {
  // The location of Senac Recife
  const position = { lat: -8.052156007932007, lng: -34.8861037232038 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Senac Recife
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Senac Recife
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Senac",
  });
}

initMap();