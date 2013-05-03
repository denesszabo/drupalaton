var geocoder,
    map,
    google,
    icon = 'themes/yellow-swan/img/marker-drupalaton.png';

function initialize() {
    'use strict';

    geocoder = new google.maps.Geocoder();

    var latlng = new google.maps.LatLng(37.0625,-95.677068),
        myOptions = {
            zoom: 16,
            center: latlng,
            scrollwheel: false,
            streetViewControl: true,
            labels: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
    map.setCenter(latlng);
}

$(document).ready(function () {

    'use strict';

    $('#map-canvas').each(function () {

        var address = $(this).attr('data-address');

        geocoder = new google.maps.Geocoder();

        initialize();
	var latlng = new google.maps.LatLng(37.0625,-95.677068);
        geocoder.geocode({ 'address': address}, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {

                map.setCenter(results[0].geometry.location);
//console.log(results[0].geometry.location);
	    /*
	     * Q { jb=

46.75943290000001

, kb=

17.25181699999996

, toString=function(), more...}
	     */
	    //results[0].geometry.location.jb = 46.76;
	    //results[0].geometry.location.kb = 17.25181699999996;
                new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: icon
                });
            } else {
                if (console) {
                    console.log('Google Maps was not loaded: ', status);
                }
            }
        });
    });
});