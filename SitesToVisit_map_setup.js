//JavaScript code to set up three marker icons for the three marker variables, and set up information boxes linked to the markers
var map; // The map object
var myCentreLat = 51.7;
var myCentreLng = -1.2;
var initialZoom = 9;



function infoCallback(infowindow, marker) {
	return function() {
		infowindow.open(map, marker);
	};
};

// add a blue bullet marker for the BUILT attractions
function addBuiltMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos,
		map: map,
		title: myTitle,
		icon: 'bullet_blue.png',	//setting a non-default icon for the marker, the icon was retrieved from the following website http://www.famfamfam.com/lab/icons/silk/
	});
	
	var infowindow = new google.maps.InfoWindow({content: myInfo});
   
	google.maps.event.addListener(marker,'click', infoCallback(infowindow, marker));
};

// add a green bullet marker for the NATURAL attractions
function addNaturalMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos,
		map: map,
		title: myTitle,
		icon: 'bullet_green.png',	//setting a non-default icon for the marker, the icon was retrieved from the following website http://www.famfamfam.com/lab/icons/silk/
	});
	
	var infowindow = new google.maps.InfoWindow({content: myInfo});
   
	google.maps.event.addListener(marker,'click', infoCallback(infowindow, marker));
};

// add a orange bullet marker for the HERITAGE attractions
function addHeritageMarker(myPos,myTitle,myInfo) {
	var marker = new google.maps.Marker({
		position: myPos,
		map: map,
		title: myTitle,
		icon: 'bullet_orange.png',	//setting a non-default icon for the marker, the icon was retrieved from the following website http://www.famfamfam.com/lab/icons/silk/
	});
	
	var infowindow = new google.maps.InfoWindow({content: myInfo});
   
	google.maps.event.addListener(marker,'click', infoCallback(infowindow, marker));
};

//add markers to the google map, three different marker types for the three types of tourism destination
function initialize() {
   var latlng = new google.maps.LatLng(myCentreLat,myCentreLng);
   var myOptions = {
		zoom: initialZoom,	//the zoom level set by the variable initialZoom
		center: latlng,		//the center of the map will be set using latitude and longitude
		mapTypeId: google.maps.MapTypeId.ROADMAP	//use the Google Maps roadmap map type
   };
   
   map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
 
 
	//create information boxes associated with the BUILT markers, displaying the name, brief explanation, entry fee, diablaed access and link to website
   for (id in built_markers) {
		var info = "<div class=infowindow><h1>" +
			built_markers[id].name + "</h1><p>Brief Explanation: "
			+ built_markers[id].briefExplanation +  "<p> Entry Fee: "
			+ built_markers[id].entryFee + "<p> Disabled Access: "
			+ built_markers[id].disabledAccess +  "<p> Link to Website: "
			+ built_markers[id].URL + "</p></div>";
		
		
		// Convert co-ords from easting and northings to latitude and longitude using the JScoord library
		var osPt = new OSRef(built_markers[id].easting,built_markers[id].northing);
		
		var llPt = osPt.toLatLng(osPt);
		llPt.OSGB36ToWGS84();

		addBuiltMarker(new google.maps.LatLng(llPt.lat,llPt.lng),built_markers[id].title,info);
   } 
   
   
   	//create information boxes associated with the NATURAL markers, displaying the name, brief explanation, entry fee, diablaed access and link to website
   for (id in natural_markers) {
		var info = "<div class=infowindow><h1>" +
			natural_markers[id].name + "</h1><p>Brief Explanation: "
			+ natural_markers[id].briefExplanation +  "<p> Entry Fee: "
			+ natural_markers[id].entryFee + "<p> Disabled Access: "
			+ natural_markers[id].disabledAccess +  "<p> Link to Website: "
			+ natural_markers[id].URL + "</p></div>";
		
		
		// Convert co-ords from easting and northings to latitude and longitude using the JScoord library
		var osPt = new OSRef(natural_markers[id].easting,natural_markers[id].northing);
		
		var llPt = osPt.toLatLng(osPt);
		llPt.OSGB36ToWGS84();

		addNaturalMarker(new google.maps.LatLng(llPt.lat,llPt.lng),natural_markers[id].title,info);
   } 
   
   
      	//create information boxes associated with the HERITAGE markers, displaying the name, brief explanation, entry fee, diablaed access and link to website
   for (id in heritage_markers) {
		var info = "<div class=infowindow><h1>" +
			heritage_markers[id].name + "</h1><p>Brief Explanation: "
			+ heritage_markers[id].briefExplanation +  "<p> Entry Fee: "
			+ heritage_markers[id].entryFee + "<p> Disabled Access: "
			+ heritage_markers[id].disabledAccess +  "<p> Link to Website: "
			+ heritage_markers[id].URL + "</p></div>";
		
		
		// Convert co-ords from easting and northings to latitude and longitude using the JScoord library
		var osPt = new OSRef(heritage_markers[id].easting,heritage_markers[id].northing);
		
		var llPt = osPt.toLatLng(osPt);
		llPt.OSGB36ToWGS84();

		addHeritageMarker(new google.maps.LatLng(llPt.lat,llPt.lng),heritage_markers[id].title,info);
   } 
   
   };