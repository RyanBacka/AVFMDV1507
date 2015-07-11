var getGeo =  function() {
		Ti.Geolocation.getCurrentPosition(function(a){
			console.log(a);
			console.log(JSON.stringify(a.source));
			var lat = a.cords.latitude;
			var lng = a.cords.longitude;
			ui.buildUi(lat,lng);
		});
	}
};

exports.getGeo = getGeo;
