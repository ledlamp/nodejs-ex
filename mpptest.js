var MPPclient = require("mpp-client");
var Client = new MPPclient("ws://www.multiplayerpiano.com");
Client.setChannel("lobby");
Client.start();
Client.on("connect", function(){
	Client.sendArray([{m:'userset', set:{name:'\ufffc'}}]);
});
