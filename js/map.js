$(document).ready(function() {
	

function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(40.378626, -74.934779),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

});