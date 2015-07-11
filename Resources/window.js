var mainWin = Ti.UI.createWindow({
	backgroundColor: "#f0f8ff",
	layout: vertical
});

var buildUi = function(lat,lng){
	win.add(Ti.UI.createLabel({
		text:lat
	}));
	win.add(Ti.UI.createLabel({
		text:lng
	}));
};

win.open();

exports.mainWin = mainWin;
