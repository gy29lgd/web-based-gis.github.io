//JavaScript code to set up a Google Map API with markers and information boxes for the Home Page
var map; // The map object
var myCentreLat = 51.7;
var myCentreLng = -1.2;
var initialZoom = 9;



function infoCallback(infowindow, marker) {
	return function() {
		infowindow.open(map, marker);
	};
};

function addMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos,
		map: map,
		title: myTitle,
		icon: 'bullet_red.png',	//setting a non-default icon for the marker, the icon was retrieved from the following website http://www.famfamfam.com/lab/icons/silk/
	});
	
	var infowindow = new google.maps.InfoWindow({content: myInfo});
   
	google.maps.event.addListener(marker,'click', infoCallback(infowindow, marker));
};

function initialize() {
   var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
   var myOptions = {
		zoom: initialZoom,	//the zoom level set by the variable initialZoom
		center: latlng,		//the center of the map will be set using latitude and longitude
		mapTypeId: google.maps.MapTypeId.ROADMAP	//use the Google Maps roadmap map type
   };
   
   map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);

	//create information boxes associated with the markers, displaying the name and attraction type
   for (id in all_sites_markers) {
		var info = "<div class=infowindow><h1>" +
			all_sites_markers[id].name + "</h1><p>Attraction Type: "
			+ all_sites_markers[id].attractionType + "</p></div>";
		
		
		// Convert co-ords from easting and northings to latitude and longitude using the JScoord library
		var osPt = new OSRef(all_sites_markers[id].easting,all_sites_markers[id].northing);
		
		var llPt = osPt.toLatLng(osPt);
		llPt.OSGB36ToWGS84();

		addMarker(new google.maps.LatLng(llPt.lat,llPt.lng),all_sites_markers[id].title,info);
   }
   };
   
