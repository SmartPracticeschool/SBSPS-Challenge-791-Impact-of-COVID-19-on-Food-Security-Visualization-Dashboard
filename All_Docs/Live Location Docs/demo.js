/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
  map.setCenter({lat:19.8762, lng:75.3433});
  map.setZoom(14);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: "GybSdxy6_5THnJnyF8wRyglrAVGOZkvDiYV1OfCyrlk"
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:50, lng:5},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

//Add marker
var berlinMarker = new H.map.Marker({
  lat:19.8762,
  lng:75.3433
});
map.addObject(berlinMarker);
/*
//Routing
var router = platform.getRoutingService(),
  routeRequestParams = {
    mode: 'fastest;car',
    representation: 'display',
    routeattributes: 'waypoints,summary,shape,legs',
    maneuverattributes: 'direction,action',
    waypoint0: '19.8762,75.3433', // Brandenburg Gate
    waypoint1: '19.8739,75.3669'  // Friedrichstraße Railway Station
  };


router.calculateRoute(
  routeRequestParams,
  onSuccess,
  onError
);*/
// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  moveMapToBerlin(map);
}