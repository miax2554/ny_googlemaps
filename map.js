var map;

function initMap() {

	console.log("initMap")

	map = new google.maps.Map(document.getElementById("map"), {
		zoom: 18,
		center: {
			lat: 55.706361,
			lng: 12.539333
		}



	});
	$.getJSON("map.json", dataErHentet);

}

function dataErHentet(data) {
	console.log(data);
	data.forEach(lavMarker);
}

function lavMarker(mapInfo) {
	console.log("Jeg prøver at lave en marker")

	var marker = new google.maps.Marker({
		position: mapInfo.position,
		map: map,
		title: mapInfo.hvad

	});

	var infowindow = new google.maps.InfoWindow({
		content: "Det skulle gerne blive til noget andet om lidt!",
		position: mapInfo.position
	});

	marker.addListener("click", function () {
		console.log("Så skulle der gerne stå en masse i window'et")
		var clone = document.querySelector("#tekst").content.cloneNode(true);
		clone.querySelector(".data_hvad").textContent = mapInfo.hvad;
		clone.querySelector(".data_hvem").textContent = mapInfo.hvem;
		clone.querySelector(".data_hvor").textContent = mapInfo.hvor;
		clone.querySelector(".data_icon img").src = mapInfo.icon;
		infowindow.setContent(clone);
		infowindow.open(map);

	});
}
