kurento = Npm.require("kurento-client");
var Future = Npm.require("fibers/future");

// Logging connection success/error
kurento.logConnectionStatus = false;

var kurentoAddr = Meteor.settings.kurentoAddr,
	kurentoClient = null;
getKurentoClient = function () {
	if (kurentoClient !== null) {
		return kurentoClient;
	}

	try {
		kurentoClient = Meteor.wrapAsync(kurento)("ws://" + kurentoAddr + "/kurento");
		if (kurento.logConnectionStatus) {
			console.log("Kurento connected", kurentoAddr);
		}
		var onDisconnect;
		onDisconnect = function () {
			if (kurento.logConnectionStatus) {
				console.log("Kurento disconnected", kurentoAddr);
			}
			kurentoClient = null;
		};
		kurentoClient.on("disconnect", onDisconnect);
	} catch (e) {
		if (kurento.logConnectionStatus) {
			console.log("Kurento connection failure", kurentoAddr);
		}
		kurentoClient = null;
	}

	return kurentoClient;
}
