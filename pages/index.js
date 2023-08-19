<!DOCTYPE html>
<html>
<head>
<title>i have your location</title>
<script>
function showCoordinates() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      
      var coordinatesText = "Latitude: " + latitude + "<br>Longitude: " + longitude;
      document.getElementById("coordinates").innerHTML = coordinatesText;
    });
  } else {
    document.getElementById("coordinates").innerHTML = "Geolocation is not supported by this browser.";
  }
}
</script>
</head>
<body>

<h1>Coordinates Viewer</h1>
<button onclick="showCoordinates()">Show My Coordinates</button>
<p id="coordinates"></p>

</body>
</html>
