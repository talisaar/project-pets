var current_lat;
var current_lng;
var locations_lat = [];
var locations_lng = [];

var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 53.7813552,
            lng: -112.1964913
        },
        zoom: 4
    });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });


    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(14); // Why 14? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        current_lat = marker.position.lat();
        current_lng = marker.position.lng();


        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;
        infowindow.open(map, marker);
    });


    var icons = {
        grooming: {
            name: 'Grooming',
            icon: 'assets/images/g.png'
        },
        vet: {
            name: 'Vet',
            icon: 'assets/images/v.png'
        },
        store: {
            name: 'Pet Store',
            icon: 'assets/images/s.png'
        },
        hospital: {
            name: 'Pet Hospital',
            icon: 'assets/images/h.png'
        }
    };

    // Store pins you want to display as object with a position and type - where type is the object name of the icon

    var features = [{
    //     position: new google.maps.LatLng(37.7749, -122.4194),
    //     type: 'store'
    // }, {
    //     position: new google.maps.LatLng(37.7749, -122.4194),
    //     type: 'hospital'
    // }, {
    //     position: new google.maps.LatLng(37.7849, -122.4194),
    //     type: 'vet'
    // }, {
    //     position: new google.maps.LatLng(37.7749, -122.4250),
    //     type: 'grooming'
    }];

    // for each of the objects in the features list create a marker with the objects position and icon

    features.forEach(function(feature) {
        var newmarker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });

        newmarker.addListener('click', function() {
            console.log("clicked a markr");
            $("#icon-info").text("Info of this marker");
            $("#icon-info").css("font-size", "20px");


        });

    });
   // This creates the legend

    // var legend = document.getElementById("legend");
    // for (var key in icons) {
    //     var type = icons[key];
    //     var name = type.name;
    //     var icon = type.icon;
    //     var div = document.createElement('div');
    //     div.innerHTML = '<img src="' + icon + '"> ' + name;
    //     legend.appendChild(div);
    // }

    // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);

}


// THE CODE BELOW IS COMMENTED OUT BECAUSE IT MAKES THE CODE ABOVE MOT WORK
// ALSO PLEASE REMEMBER THE GOOGLE MAPS CODE HAS TO BE OUTSIDE OF THE DOCUMENT.READY OR ELSE IT DOESNT WORK

$(document).ready(function() {


function redoMap() {



    console.log(map);
    map.setCenter({
        lat: current_lat,
        lng: current_lng
    })
    map.setZoom(10);
    // var map = new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //         lat: current_lat,
    //         lng: current_lng
    //     },
    //     zoom: 14
    // });
    var card = document.getElementById('pac-card');
    var input = document.getElementById('pac-input');
    var types = document.getElementById('type-selector');
    var strictBounds = document.getElementById('strict-bounds-selector');

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });


    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(14); // Why 14? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindowContent.children['place-icon'].src = place.icon;
        infowindowContent.children['place-name'].textContent = place.name;
        infowindowContent.children['place-address'].textContent = address;
        infowindow.open(map, marker);
    });


    var icons = {
        grooming: {
            name: 'Grooming',
            icon: 'assets/images/g.png'
        },
        vet: {
            name: 'Vet',
            icon: 'assets/images/v.png'
        },
        store: {
            name: 'Pet Store',
            icon: 'assets/images/s.png'
        },
        hospital: {
            name: 'Pet Hospital',
            icon: 'assets/images/h.png'
        }
    };

    // Store pins you want to display as object with a position and type - where type is the object name of the icon

    var features = [{
        position: new google.maps.LatLng(locations_lat[0], locations_lng[0]),
        type: 'store'
    }, {
        position: new google.maps.LatLng(locations_lat[1], locations_lng[1]),
        type: 'store'
    }, {
        position: new google.maps.LatLng(locations_lat[2], locations_lng[2]),
        type: 'store'
    }, {
        position: new google.maps.LatLng(locations_lat[3], locations_lng[3]),
        type: 'hospital'
    }, {
        position: new google.maps.LatLng(locations_lat[4], locations_lng[4]),
        type: 'hospital'
    }];

    // for each of the objects in the features list create a marker with the objects position and icon

    features.forEach(function(feature) {
        var newmarker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });

        newmarker.addListener('click', function() {
            console.log("clicked a markr");
            $("#icon-info").text("Info of this marker");
            $("#icon-info").css("font-size", "20px");


        });

        console.log(feature.position);

    });


    var legend = document.getElementById("legend");
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.style.borderColor = "black";
        legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
   
} // end of reDo map

function clearmap () {



};


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

  // this retrieves business data
  function getBizData() {

    $("#displayAPI").empty();

    var search = $("#selection-input").val();
    var location = $("#pac-input").val();
    var distance = $("#distance-input").val();
    var yellow = "http://api.sandbox.yellowapi.com/FindBusiness/?"
      + "what=" + encodeURIComponent(search)
      + "&where=" + encodeURIComponent(location)
      + "&dist=" + distance
      + "&fmt=JSON&pgLen=5&UID=127.0.0.1"
      + "&apikey=8v2eyjyx79f4m3zcctsyqmxd";

    $.ajax({
      type: "GET",
      url: queryURL,
    }).done(function(response) {
      var dataSize = response.listings.length
      for (var i = 0; i < 5; i++) {
        getGiphy();
        var name = response.listings[i].name;
        var address = response.listings[i].address.street
          + response.listings[i].address.city
          + response.listings[i].address.pcode
          + response.listings[i].address.prov;
        var resultUrl = response.listings[i].merchantUrl;
        var phone = response.listings[i].phone.dispNum;
        var geoCode_lat = response.listings[i].geoCode.latitude
        var geoCode_lng = response.listings[i].geoCode.longitude;
        locations_lat.push(geoCode_lat);
        locations_lng.push(geoCode_lng);
        var result = $("<p>")
          .html(name + "<br>" + "Address: " + address + "<br>" + "Phone: " + phone + "<br>" + "Website: " + resultUrl)
          .appendTo($("#displayAPI"));
      }
      clearmap();
      redoMap();
    });
    requestCrossDomain(yellow, displayData);
  };

  // This section is exclusively for the YQL proxy to run our http api calls over https (to make Github Pages happy).
  function requestCrossDomain( yellow, callback ) {

    // If no url was passed, exit.
    if (!yellow) {
        alert('No site was passed.');
        return false;
    };

    // Take the provided url, and add it to a YQL query. Make sure you encode it!
    var yql = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + yellow + '"') + '&format=json&';

    // Request that YSQL string, and run a callback function.
    // Pass a defined function to prevent cache-busting.
    $.getJSON(yql, cbFunc);

    function cbFunc(data) {
      // If we have something to work with...
        if (data.query) {
          // If the user passed a callback, and it
          // is a function, call it, and send through the data var.
          if (typeof callback === 'function') {
              console.log("madeIt");
              callback(data.query.results.json);
          }
        }
        // Else, Maybe we requested a site that doesn't exist, and nothing returned.
        else throw new Error('Nothing returned from getJSON.');
      };
  };

  function displayData(response) {
    var dataSize = response.listings.length
    console.log(dataSize );
    for (var i = 0; i < 5; i++) {
      getGiphy();
      var name = response.listings[i].name;
      var address = response.listings[i].address.street
        + response.listings[i].address.city
        + response.listings[i].address.pcode
        + response.listings[i].address.prov;
      var resultUrl = response.listings[i].merchantUrl;
      var phone = response.listings[i].phone.dispNum;
      var geoCode = response.listings[i].geoCode.latitude
        + response.listings[i].geoCode.longitude;
      var result = $("<p>")
        .html(name + "<br>" + "Address: " + address + "<br>" + "Phone: " + phone + "<br>" + "Website: " + resultUrl)
        .appendTo($("#displayAPI"));
      };
  };

  var animal = ['pug', 'cat', 'bunny', 'hamster', 'bird', 'turtle', 'dog'];
  function shuffleAnimal(animal) {
    var j = animal.length - 1;
    var k = Math.floor(Math.random() * (j + 1));
    return animal[k];
  }

  function getGiphy() {
    $("#displayGif").empty();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + shuffleAnimal(animal) + "&limit=100&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
      $('#displayGifs').prepend(JSON.stringify(response));
      var selectionDiv = $('<div id="selectionData">');
      var i = Math.floor(Math.random() * 100);
      var gif = response.data[i].images.fixed_height.url;
      var displayGiffy = $('<img>')
          .attr('src', gif)
          .addClass('gifImage');
      selectionDiv.append(displayGiffy);
      $('#displayGif').prepend(selectionDiv);
    })
  }

  function alertModal(input) {
    $('[data-modal-option]').hide();
    $('.modal-' + input).show();

    $('#myModal').show();

    $('#myModal .close').on('click', function() {
      $('#myModal').hide();
    })
  };

  $('#submit-Info').on('click', function(event) {
    event.preventDefault();



    var inputSelection = $('#selection-input').val();
    var inputAddress = $('#pac-input').val();
    if (!inputSelection || !inputAddress) {
      alertModal('all-inputs');
      return false;
    };

    var inputDistance = $('#distance-input').val();
    var numberRegex = /^\d+$/;
    if (!numberRegex.test(inputDistance)) {
      alertModal('number-inputs');
      return false;
    };

    getBizData();
    // clears form fields after hitting submit, selection is reset to 'void' status
    $('#selection-input').val('');
    $('#pac-input').val('');
    $('#distance-input').val('');



  })

});
