var map 
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
  var request = {
    origin: "41.525626,-81.433057", 
    destination: "41.564245,-81.444373",
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}