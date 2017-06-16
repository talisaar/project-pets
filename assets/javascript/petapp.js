var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-area'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
var map;
function initMap() {
  var self = this;
  map = new google.maps.Map(document.getElementById('map-area'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 13
});

// Store the icons as objects with name and  image

 var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var icons = {
    parking: {
      name: 'Parking',
      icon: iconBase + 'parking_lot_maps.png'
    },
    library: {
      name: 'Library',
      icon: iconBase + 'library_maps.png'
    },
    info: {
      name: 'Info',
      icon: iconBase + 'info-i_maps.png'
    }
  };

// Store pins you want to display as object with a position and type - where type is the object name of the icon

  var features = [
    {
      position: new google.maps.LatLng(37.7749, -122.4194),
      type: 'info'
    }, {
      position: new google.maps.LatLng(37.7749, -122.4294),
      type: 'info'
    }, {
      position: new google.maps.LatLng(37.7749, -122.4094),
      type: 'info'
    }, {
      position: new google.maps.LatLng(37.7649, -122.4194),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(37.7749, -122.4157),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(37.7749, -122.4194),
      type: 'parking'
    },{
      position: new google.maps.LatLng(37.7849, -122.4194),
      type: 'library'
    }, {
      position: new google.maps.LatLng(37.7749, -122.4194),
      type: 'library'
    }, {
      position: new google.maps.LatLng(37.7749, -122.4250),
      type: 'library'
    }
  ];

// for each of the objects in the features list create a marker with the objects position and icon

  features.forEach(function(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  });
// This creates the legend

  var legend = document.getElementById("legend");
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
// THE CODE BELOW IS COMMENTED OUT BECAUSE IT MAKES THE CODE ABOVE MOT WORK
// ALSO PLEASE REMEMBER THE GOOGLE MAPS CODE HAS TO BE OUTSIDE OF THE DOCUMENT.READY OR ELSE IT DOESNT WORK

$(document).ready(function() {

//   var config = {
//   apiKey: "AIzaSyCQ__vhHShTpCE-GENvH5K9jv8bX4iUdXg",
//   authDomain: "marksinsaneasylum.firebaseapp.com",
//   databaseURL: "https://marksinsaneasylum.firebaseio.com",
//   projectId: "marksinsaneasylum",
//   storageBucket: "marksinsaneasylum.appspot.com",
//   messagingSenderId: "587854779697"
// }
//   firebase.initializeApp(config);
//   // setting variables
//   var database = firebase.database();
  var yelpID = '';
  var yelpName = '';
  var yelpRating = '';
  var yelpAddress = '';
  var yelpHours = '';
  var yelpWebsite = '';
  var yelpLattitude = '';
  var yelpLongitude = '';
  var inputSelection = '';
  var inputAddress = '';
  var inputDistance = '';


  // function getYelpData() {
  //   var queryURL = '';
  //   $('#search-form').on('submit', function(event) {
  //   event.preventDefault();

  //   var services = document.getElementById('selection-input').value;
  //   var address = document.getElementById('address-input').value;
  //   var maxDistance = document.getElementById('distance-input').value;
  //   $.ajax({
  //     url: queryURL,
  //     method: 'GET',
  //     data: {
  //       'api-key': 'apikey',
  //       'services': services
  //     }
  //   }).done(function(response){
  //     var response = response.val();
  //     yelpID = response.yelpID;
  //     yelpName = response.yelpName;
  //     yelpRating = response.yelpRating;
  //     yelpAddress = response.yelpAddress;
  //     yelpHours = response.yelpHours;
  //     yelpWebsite = response.yelpWebsite;
  //   });
  //   getGiphy(services);
  // })

  function displayYelpData() {

  }

  function getGiphy(){
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + inputSelection + "&limit=100&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        $('#displayGifs').prepend(JSON.stringify(response));
        var selectionDiv = $('<div id="selectionData">');
        var i = Math.floor(Math.random() * 50);
        var gif = response.data[i].images.fixed_height.url;
        var displayGiffy = $('<img>')
        .attr('src', gif)
        .addClass('gifImage');
        selectionDiv.append(displayGiffy);
        $('#displayGif').append(selectionDiv);
    })

  }

  $('#submit-Info').on('click', function(event) {
    event.preventDefault();
    inputSelection = $('#selection-input').val().trim();
    inputAddress = $('#address-input').val().trim();
    inputDistance = $('#distance-input').val().trim();
    // console.log('selection: ' + inputSelection);
    // console.log('address: ' + inputAddress);
    // console.log('distance: ' + inputDistance);
    getGiphy(inputSelection);
    // clears form fields after hitting submit, selection is reset to 'void' status
    $('#selection-input').val('void');
    $('#address-input').val('');
    $('#distance-input').val('');
  })

});
