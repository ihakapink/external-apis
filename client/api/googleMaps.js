import request from 'superagent'

const token = 'AIzaSyBFYlk0zacL_PS_Gqt9gv4_gOCcAR0Iip0'

export function getFinance () {
  return request
    // Url of google maps.
    .get(`https://maps.googleapis.com/maps/api/js?key=${token}&callback=myMap`)
    .then(res => {
      return res.body.articles
    })
}

/*

<!DOCTYPE html>
<html>
<body>

<h1>Hey Google</h1>

<div id="googleMap" style="width:100%;height:400px;"></div>

<script>
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(44.697189,-63.677902),
  zoom:7,
}
var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFYlk0zacL_PS_Gqt9gv4_gOCcAR0Iip0&callback=myMap"></script>

</body>
</html>

*/
