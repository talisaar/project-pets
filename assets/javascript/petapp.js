$(document).ready(function() {
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map-area'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
  var config = {
    apiKey: "AIzaSyCQ__vhHShTpCE-GENvH5K9jv8bX4iUdXg",
    authDomain: "marksinsaneasylum.firebaseapp.com",
    databaseURL: "https://marksinsaneasylum.firebaseio.com",
    projectId: "marksinsaneasylum",
    storageBucket: "marksinsaneasylum.appspot.com",
    messagingSenderId: "587854779697"
  }
  firebase.initializeApp(config);
  // setting variables
  var database = firebase.database();
  var yelpID = '';
  var yelpName = '';
  var yelpRating = '';
  var yelpAddress = '';
  var yelpHours = '';
  var yelpWebsite = '';
  // function for an ajax call to grab data and store yelp data
  function getYelpData() {
    var queryURL = '';
    $('#search-form').on('submit', function(event) {
    event.preventDefault();

    var services = document.getElementById('services').value;
    var address = document.getElementById('address').value;
    var maxDistance = document.getElementById('maxDistance').value;
    $.ajax({
      url: queryURL,
      method: 'GET',
      data: {
        'api-key':,
        'services': services
      }
    }).done(function(response){
      yelpID = response;
      yelpName = response;
      yelpRating = response;
      yelpAddress = response;
      yelpHours = response;
      yelpWebsite = response;
    });
    getGiphy(services);
  }

  function displayYelpData() {

  }
  // function to get Giphy api data
  function getGiphy(){
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + services + "&limit=100&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
      for (i = 0; i < response.length; i++){
        var gif = response.data[i].images.fixed_height.url;
        $('#displayGif').append(gif);
      }
    }
  }
  $('#submit-Info').on('click', function(event) {
    event.preventDefault();
  });
  $('.dropdown-toggle').dropdown()
});
