function initMap() {   
    var melbourne = {lat: -37.814, lng: 144.963}; 
    var mapOptions = {
          zoom: 16,
          center: melbourne,
          styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
        }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
          position: melbourne,
          map: map
        });
      }