// google.maps.event.addDomListener(window, 'load', init);

var map 
function init() {

  var mapOptions = {
    zoom: 7,

    styles: [
      {
        "featureType":"all",
        "elementType":"labels.text.fill",
        "stylers":[
          {"saturation":36},
          {"color":"#000000"},
          {"lightness":40}]
        },
      {
        "featureType":"all",
        "elementType":"labels.text.stroke",
        "stylers":[
          {"visibility":"on"},
          {"color":"#000000"},
          {"lightness":16}
          ]
        },
      {
        "featureType":"all",
        "elementType":"labels.icon",
        "stylers":[
          {"visibility":"off"}
          ]
        },
      {
        "featureType":"administrative",
        "elementType":"geometry.fill",
        "stylers":[
          {"color":"#000000"},
          {"lightness":20}
          ]
        },
      {
        "featureType":"administrative",
        "elementType":"geometry.stroke",
        "stylers":[
          {"color":"#000000"},
          {"lightness":17},
          {"weight":1.2}
          ]
        },
      {
        "featureType":"landscape",
        "elementType":"geometry",
        "stylers":[
          {"color":"#000000"},
          {"lightness":20}
          ]
        },
      {
        "featureType":"poi",
        "elementType":"geometry",
        "stylers":[
          {"color":"#000000"},
          {"lightness":21}
          ]
        },
      {
        "featureType":"road.highway",
        "elementType":"geometry.fill",
        "stylers":[
          {"color":"#000000"},
          {"lightness":17}
          ]
        },
      {
        "featureType":"road.highway",
        "elementType":"geometry.stroke",
        "stylers":[
          {"color":"#000000"},
          {"lightness":29},
          {"weight":0.2}
          ]
        },
      {
        "featureType":"road.arterial",
        "elementType":"geometry",
        "stylers":[
          {"color":"#000000"},
          {"lightness":18}
          ]
        },
      {
        "featureType":"road.local",
        "elementType":"geometry",
        "stylers":[
          {"color":"#000000"},
          {"lightness":16}
          ]
        },
      {
        "featureType":"transit",
        "elementType":"geometry",
        "stylers":[
          {"color":"#000000"},
          {"lightness":19}
          ]
        },
      {
        "featureType":"water",
        "elementType":"geometry",
        "stylers":[
          {"color":"#000000"},
          {"lightness":17}
          ]
      }
    ],

    mapTypeControl: false,
    draggable: false,
    scaleControl: false,
    scrollwheel: false,
    navigationControl: false,
    streetViewControl: false,
    zoomControl: false
  };


  map = new google.maps.Map(document.getElementById('map'), mapOptions); 

  // var trafficLayer = new google.maps.TrafficLayer();
  // trafficLayer.setMap(map);

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