window.addEventListener("load", initMap);

var map;

function initMap() {
	console.log("Hej med dig");
	var myLatLng = {
		lat: 55.706373,
		lng: 12.539311
	};

	var myLatLng2 = {
		lat: 55.707248,
		lng: 12.538124
	};

	var myLatLng3 = {
		lat: 55.706364,
		lng: 12.538177
	};

	var myLatLng4 = {
		lat: 55.706293,
		lng: 12.541411
	};


	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 18,
		center: myLatLng
	});


	var marker1 = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "Her ligger KEA"


	});

	var marker = new google.maps.Marker({
		position: myLatLng2,
		map: map,
		title: "Her ligger Netto"
	});

	var marker = new google.maps.Marker({
		position: myLatLng3,
		map: map,
		title: "Her ligger Lidl",
		icon: 'lidl.png'
	});

	var marker = new google.maps.Marker({
		position: myLatLng4,
		map: map,
		title: "Her er et tog, så du kan komme hjem igen",
		icon: 'tog.png'
	});

	marker1.addListener('click', function () {
		console.log("er klikket på");
		map.setZoom(25);
		map.setCenter(marker.getPosition());
	});

}
