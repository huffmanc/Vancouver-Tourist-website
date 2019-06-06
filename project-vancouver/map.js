var map;
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.2827, lng: -123.1207},
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.HYBRID
});

var infowindow = new google.maps.InfoWindow();
map.data.addListener('click', function(event) {
    var numBedrooms = event.feature.l["Average - bedrooms"];
    var avgPrice = event.feature.l["Average – price_per_night"];
    var neighborhood = event.feature.l["Neighborhood"];
    infowindow.setContent("<h5>Neighborhood: " + neighborhood + "</h5>" + "<p>Average number of bedrooms: " + numBedrooms + "</p>" + "<p>Average price per night: $" + avgPrice + "</p>");
    infowindow.setPosition(event.latLng); 
    infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
    infowindow.open(map);
});

map.data.loadGeoJson("vancouver_merged.json");
map.data.setStyle(function(feature) {
    return {icon: feature.getProperty('icon')};
});
map.data.setStyle(function(feature) {
    return ({
      fillColor: "#002266",
      strokeColor: "#002266",
      strokeWeight: 2
    });
  });