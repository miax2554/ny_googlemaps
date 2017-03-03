window.addEventListener("load", initMap);

var map;



function initMap() {
	console.log("Hej med dig");
	var myLatLng = {
		lat: 55.706373,
		lng: 12.539311(hentJSON)
	}

	function hentJSON() {
		$.getJSON("map.json", dataErHentet);
	}

	function dataErHentet(data) {
		console.log(data);
		data.forEach(visInfo);
	}

	function visInfo(mapinfo) {
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 18,
			center: myLatLng
		});

		var infowindow = new google.maps.InfoWindow({
			content: "Her kan du gå i skole, hvis du har lyst"

		})
		var klon = document.querySelector("#tekst").content.cloneNode(true);
		infowindow.setContent(klon);
		klon.querySelector(".data_hvad").textContent = mapinfo.hvad;
		klon.querySelector(".data_hvem").textContent = mapinfo.hvem;
		klon.querySelector(".data_hvor").textContent = mapinfo.hvor;
	}
